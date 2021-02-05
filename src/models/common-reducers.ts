/**
 * Description: Common DVA model reducers
 */

import type { Reducer } from 'redux';

import { autobind } from 'utils/utils';

export interface ICommonReducers<T extends { validationErrors: any[] }> {
  putValidationErrors: Reducer<T>;
  clearValidationErrors: Reducer<T>;
}

export class CommonReducers<T extends { validationErrors: any[] }> implements ICommonReducers<T> {
  constructor() {
    autobind(this);
  }

  public putValidationErrors: Reducer<T> = (state, { payload }): T => {
    const { validationErrors = [] } = payload;
    return {
      ...state,
      validationErrors,
    } as T;
  };

  public clearValidationErrors: Reducer<T> = (state): T =>
    ({
      ...state,
      validationErrors: [] as any[],
    } as T);
}
