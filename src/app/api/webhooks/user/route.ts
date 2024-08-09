import {
  WebhookEvent,
  WebhookEventType,
} from '@clerk/nextjs/dist/types/server';
import { Prisma } from '@prisma/client';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Webhook, WebhookRequiredHeaders } from 'svix';

import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET ?? '';
  if (!WEBHOOK_SECRET) {
    throw new Error('Please add Webhook secret from Clerk');
  }

  const headersPayload = headers();
  const headerSvix: WebhookRequiredHeaders = {
    'svix-id': headersPayload.get('svix-id') as string,
    'svix-timestamp': headersPayload.get('svix-timestamp') as string,
    'svix-signature': headersPayload.get('svix-signature') as string,
  };

  if (
    !headerSvix['svix-id'] ||
    !headerSvix['svix-timestamp'] ||
    !headerSvix['svix-signature']
  ) {
    return new Response('Error occurred -- no Svix headers', {
      status: 400,
    });
  }

  const payload = await request.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let event: WebhookEvent | null = null;

  try {
    event = wh.verify(body, headerSvix) as WebhookEvent;
  } catch (error) {
    console.error((error as Error).message);
    return NextResponse.json(
      { error: 'Invalid webhook signature' },
      { status: 400 }
    );
  }

  const { id, ...attributes } = event.data;
  const eventType: WebhookEventType = event.type;
  if (eventType === 'user.created' || eventType === 'user.updated') {
    await prisma.user.upsert({
      where: { externalId: id as string },
      create: {
        externalId: id as string,
        attributes: attributes as Prisma.JsonObject,
      },
      update: {
        attributes: attributes as Prisma.JsonObject,
      },
    });
    return NextResponse.json({}, { status: 200 });
  } else if (eventType === 'user.deleted') {
    await prisma.user.delete({
      where: {
        externalId: id,
      },
    });
    return NextResponse.json({}, { status: 200 });
  }

  return NextResponse.json(
    { message: 'Event type not handled' },
    { status: 200 }
  );
}

export const GET = POST;
