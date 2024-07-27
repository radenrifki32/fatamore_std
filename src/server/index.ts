import { currencyRouter } from '@/server/router/currency';
import { ProjectRouter } from '@/server/router/project';
import { UserRouter } from '@/server/router/user';

import { router } from './trpc';

export const appRouter = router({
  user: UserRouter,
  project: ProjectRouter,
  currency: currencyRouter,
});

export type AppRouter = typeof appRouter;
