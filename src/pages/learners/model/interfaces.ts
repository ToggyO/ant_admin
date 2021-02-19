/**
 * Description: Learners module DVA model interfaces
 */

import type { Effect, Reducer } from 'umi';

import type { IBaseDvaModelState } from 'models/connect';
import type { AntPagination } from 'utils/helpers';
import type { ICommonReducers } from 'models/common.reducers';

import type { Learner } from './types';

export interface ILearnersState extends IBaseDvaModelState {
  list: Learner[];
  pagination: AntPagination;
  details: Learner;
}

export interface ILearnersEffects {
  getList: Effect;
  getDetails: Effect;
  editDetails: Effect;
  remove: Effect;
}

export interface ILearnersReducers extends ICommonReducers<ILearnersState> {
  saveList: Reducer<ILearnersState>;
  saveDetails: Reducer<ILearnersState>;
  clearList: Reducer<ILearnersState>;
  clearDetails: Reducer<ILearnersState>;
}

export interface ILearnersModel {
  namespace: 'learners';
  state: ILearnersState;
  effects: ILearnersEffects;
  reducers: ILearnersReducers;
}
