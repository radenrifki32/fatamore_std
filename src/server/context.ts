import { clerkClient, getAuth } from '@clerk/nextjs/server';
import { type User } from '@clerk/nextjs/server';
import * as trpc from '@trpc/server';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../lib/db';
interface CreateContextOptions extends CreateNextContextOptions {
  prisma: typeof prisma;
  user: User | null;
}
const getUser = async (opts: CreateContextOptions) => {
  const { userId } = getAuth(opts.req);
  const user = userId ? await clerkClient.users.getUser(userId) : null;
  return user;
};
export async function createContextInner(_opts: CreateContextOptions) {
  const user = await getUser(_opts);
  return { prisma: _opts.prisma, user: user };
}
export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;
export async function createFetchContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}): Promise<Context> {
  const user = await getUser({
    req,
    res,
    prisma,
    user: null,
  });
  return createContextInner({ req, res, prisma, user });
}
