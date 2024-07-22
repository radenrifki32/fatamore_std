import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextApiRequest, NextApiResponse } from 'next';

import { createFetchContext } from '@/server/context';

import { appRouter } from '../../../../server/';

const handler = async (req: Request, res: Response) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: ({ req }) =>
      createFetchContext({
        req: req as unknown as NextApiRequest,
        res: res as unknown as NextApiResponse,
      }),
  });
};

export { handler as GET, handler as POST };
