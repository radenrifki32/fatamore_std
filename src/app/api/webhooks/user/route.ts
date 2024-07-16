import {
  WebhookEvent,
  WebhookEventType,
} from '@clerk/nextjs/dist/types/server';
import { Prisma } from '@prisma/client';
import { IncomingHttpHeaders } from 'http';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Webhook, WebhookRequiredHeaders } from 'svix';

import { prisma } from '@/lib/db';
export async function handler(request: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET ?? '';
  if (!WEBHOOK_SECRET) {
    throw new Error('Please add Webhook secret from Clerk');
  }

  const headersPayload = headers();
  const headerSvix = {
    'svix-id': headersPayload.get('svix-id'),
    'svix-timestamp': headersPayload.get('svix-timestamp'),
    'svix-signature': headersPayload.get('svix-signature'),
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
    event = wh.verify(
      body,
      headerSvix as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as WebhookEvent;
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
    console.log(attributes, 'attributes');
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
  } else if (event.type === 'user.deleted') {
    await prisma.user.delete({
      where: {
        externalId: id,
      },
    });
  }

  return NextResponse.json(
    { message: 'Event type not handled' },
    { status: 200 }
  );
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
