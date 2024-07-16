import { UserRouter } from '@/server/router/user';

import { router } from './trpc';

export const appRouter = router({
  user: UserRouter,
});

export type AppRouter = typeof appRouter;
