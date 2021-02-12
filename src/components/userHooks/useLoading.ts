import { useSelector } from 'dva';

import type { ConnectState, ILoading } from 'models/connect';

/**
 * Helper hook function to get loading state
 * @return {boolean | string} option -
 *      boolean - global loader,
 *      string - loader from reducer specified by name
 * @return {boolean}
 */
export function useLoading(option: boolean | Exclude<keyof ConnectState, 'loading'>): boolean {
  const globalLoadingState = useSelector<ConnectState, ILoading>((state) => state.loading);
  let loading = false;

  if (typeof option === 'boolean') {
    loading = globalLoadingState.global;
    return loading;
  }

  const {
    models: { [option]: modelLoading },
  } = globalLoadingState;
  if (typeof modelLoading !== 'undefined') {
    loading = modelLoading;
  }
  return loading;
}
