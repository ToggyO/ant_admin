/**
 * Description: Academics module DVA model interfaces
 */

import type { Effect, Reducer } from 'umi';

import type { IBaseDvaModelState } from 'models/connect';
import type { AntPagination } from 'utils/helpers';
import type { ICommonReducers } from 'models/common.reducers';

import type { Academic } from './types';

export interface IAcademicsState extends IBaseDvaModelState {
  list: Academic[];
  pagination: AntPagination;
  details: Academic;
}

export interface IAcademicsEffects {
  getList: Effect;
  getDetails: Effect;
  editDetails: Effect;
  create: Effect;
  remove: Effect;
}

export interface IAcademicsReducers extends ICommonReducers<IAcademicsState> {
  saveList: Reducer<IAcademicsState>;
  saveDetails: Reducer<IAcademicsState>;
  clearList: Reducer<IAcademicsState>;
  clearDetails: Reducer<IAcademicsState>;
}

export interface IAcademicsModel {
  namespace: 'academics';
  state: IAcademicsState;
  effects: IAcademicsEffects;
  reducers: IAcademicsReducers;
}
