/**
 * Description: Common DVA model reducers
 */

import type { Reducer } from 'redux';

import { autobind } from 'utils/utils';

export interface ICommonReducers<T extends { errors: any[] }> {
  putErrors: Reducer<T>;
  clearErrors: Reducer<T>;
}

export class CommonReducers<T extends { errors: any[] }> implements ICommonReducers<T> {
  constructor() {
    autobind(this);
  }

  public putErrors: Reducer<T> = (state, { payload }): T => {
    const { errors = [] } = payload;
    return {
      ...state,
      errors,
    } as T;
  };

  public clearErrors: Reducer<T> = (state): T =>
    ({
      ...state,
      errors: [] as any[],
    } as T);
}
