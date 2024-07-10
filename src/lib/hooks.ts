import { useDispatch, useSelector, useStore } from 'react-redux';

import type { AppDistpatch, AppStore, RootState } from './store';

export const useAppDispatch = useDispatch.withTypes<AppDistpatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
