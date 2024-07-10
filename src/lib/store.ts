import { configureStore } from '@reduxjs/toolkit';

import userSlice from '@/lib/features/userSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
    },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDistpatch = AppStore['dispatch'];
