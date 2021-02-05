/**
 * Description: Auth module DVA model interfaces
 */

import type { Effect, Reducer } from 'umi';

import type { ICommonReducers } from 'models/common-reducers';

import type { AuthDTO } from './types';

export interface IAuthState {
  authInfo: AuthDTO;
  loginError: API.ErrorResponse;
  validationErrors: any[];
}

export interface IAuthEffects {
  signIn: Effect;
  signOut: Effect;
}

export interface IAuthReducers extends ICommonReducers<IAuthState> {
  saveAuthInfo: Reducer<IAuthState>;
  clearAuthInfo: Reducer<IAuthState>;
  setLoginError: Reducer<IAuthState>;
  clearLoginError: Reducer<IAuthState>;
}

export interface IAuthModel {
  namespace: 'auth';
  state: IAuthState;
  effects: IAuthEffects;
  reducers: IAuthReducers;
}
