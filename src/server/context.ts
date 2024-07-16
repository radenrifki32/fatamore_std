import * as trpc from '@trpc/server';

import { prisma } from '../lib/db';

interface CreateContextOptions {
  req?: Request;
  res?: Response;
  prisma: typeof prisma;
}

export async function createContextInner(_opts: CreateContextOptions) {
  return { prisma: _opts.prisma };
}

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;

export async function createFetchContext({
  req,
}: {
  req: Request;
}): Promise<Context> {
  return await createContextInner({
    req,
    prisma,
  });
}
