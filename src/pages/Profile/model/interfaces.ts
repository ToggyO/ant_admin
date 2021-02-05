/**
 * Description: Profile module DVA model interfaces
 */

import type { Effect, Reducer } from 'umi';

import type { ICommonReducers } from 'models/common-reducers';

import type { User } from './types';

export interface IProfileState {
  user: User;
  validationErrors: any[];
}

export interface IProfileEffects {
  fetchCurrent: Effect;
}

export interface IProfileReducers extends ICommonReducers<IProfileState> {
  saveUserInfo: Reducer<IProfileState>;
  clearUserInfo: Reducer<IProfileState>;
}

export interface IProfileModel {
  namespace: 'profile';
  state: IProfileState;
  effects: IProfileEffects;
  reducers: IProfileReducers;
}
