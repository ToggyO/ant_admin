import { useEffect } from 'react';
import { useDispatch } from 'dva';

import type { ActionCreator } from 'models/connect';

/**
 * Helper hook function to clear state in reducer
 * @return {ActionCreator} actionCreator - function that returns action
 * @return {void}
 */
export function useClearState<T>(actionCreator: ActionCreator<T>) {
  const dispatch = useDispatch();
  useEffect(
    () => () => {
      dispatch(actionCreator());
    },
    [dispatch, actionCreator],
  );
}
