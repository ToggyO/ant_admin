/**
 * Description: Common DVA model reducers
 */

import type { AnyAction } from 'redux';
import type { Reducer } from 'redux';

import { autobind } from 'utils/utils';

export interface ICommonReducers<T extends { errors: any[] }> {
  putErrors: Reducer<T, AnyAction>;
  clearErrors: Reducer<T, AnyAction>;
}

export class CommonReducers<T extends { errors: any[] }> implements ICommonReducers<T> {
  constructor() {
    autobind(this);
  }

  public putErrors: Reducer<T, AnyAction> = (state, { payload }): T => {
    const { errors = [] } = payload;
    return {
      ...state,
      errors,
    } as T;
  };

  public clearErrors(state: T | undefined): T {
    return {
      ...state,
      errors: [] as any[],
    } as T;
  }
}
