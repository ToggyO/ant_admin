/**
 * Description: Common DVA model reducers
 */

import type { Reducer } from 'redux';

import { autobind } from 'utils/utils';
import type { IApiErrors } from 'models/connect';

export interface ICommonReducers<T extends IApiErrors> {
  putGlobalError: Reducer<T>;
  clearGlobalError: Reducer<T>;
  putValidationErrors: Reducer<T>;
  clearValidationErrors: Reducer<T>;
}

export class CommonReducers<T extends IApiErrors> implements ICommonReducers<T> {
  constructor() {
    autobind(this);
  }

  public putGlobalError: Reducer<T> = (state, { payload }): T =>
    ({
      ...state,
      globalError: payload as API.ErrorResponse,
    } as T);

  public clearGlobalError: Reducer<T> = (state): T =>
    ({
      ...state,
      globalError: {},
    } as T);

  public putValidationErrors: Reducer<T> = (state, { payload }): T =>
    ({
      ...state,
      validationErrors: payload,
    } as T);

  public clearValidationErrors: Reducer<T> = (state): T =>
    ({
      ...state,
      validationErrors: [] as any[],
    } as T);
}
