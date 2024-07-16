import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

import { prisma } from '../../../lib/db';
export async function GET(req: Request) {
  const { userId } = auth();

  if (!userId) return NextResponse.redirect(new URL('/sign-in', req.url));
  const response = await prisma.user.findFirst({
    where: {
      externalId: userId,
    },
  });
  console.log(response);
  return new Response(JSON.stringify({ response }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
