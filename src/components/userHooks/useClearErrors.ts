/**
 * Helper hook function to clear errors from reducer
 * @return {ActionCreator} actionCreator - function that returns action
 * @return {void}
 */

import { useEffect } from 'react';
import { useDispatch } from 'dva';

import type { ActionCreator } from 'models/connect';

export function useClearErrors<T>(actionCreator: ActionCreator<T>) {
  const dispatch = useDispatch();
  useEffect(
    () => () => {
      dispatch(actionCreator());
    },
    [dispatch, actionCreator],
  );
}
