/**
 * Description: Profile module DVA model interfaces
 */

import type { Effect, Reducer } from 'umi';

import type { IBaseDvaModelState } from 'models/connect';
import type { ICommonReducers } from 'models/common.reducers';

import type { CurrentUser } from './types';

export interface IProfileState extends IBaseDvaModelState {
  user: CurrentUser;
}

export interface IProfileEffects {
  fetchCurrent: Effect;
  changeAvatar: Effect;
  changeEmail: Effect;
  changePassword: Effect;
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
