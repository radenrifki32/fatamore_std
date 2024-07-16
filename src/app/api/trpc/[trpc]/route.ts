import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { createFetchContext } from '@/server/context';

import { appRouter } from '../../../../server/';

const handler = async (req: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: createFetchContext,
  });
};

export { handler as GET, handler as POST };
