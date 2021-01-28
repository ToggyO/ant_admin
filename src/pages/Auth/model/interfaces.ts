/**
 * Description: Auth module DVA model interfaces
 */

import type { Effect, Reducer } from 'umi';

import type { ICommonReducers } from 'models/common-reducers';

import type { AuthDTO } from './types';

export interface IAuthState {
  authInfo: AuthDTO;
  errors: any[];
}

export interface IAuthEffects {
  signIn: Effect;
  signOut: Effect;
}

export interface IAuthReducers extends ICommonReducers<IAuthState> {
  saveAuthInfo: Reducer<IAuthState>;
  clearAuthInfo: Reducer<IAuthState>;
}

export interface IAuthModel {
  namespace: 'auth';
  state: IAuthState;
  effects: IAuthEffects;
  reducers: IAuthReducers;
}
