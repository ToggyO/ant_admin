/**
 * Description: Auth module DVA model interfaces
 */

import type { Effect, Reducer } from 'umi';

import type { IBaseDvaModelState } from 'models/connect';
import type { ICommonReducers } from 'models/common.reducers';

import type { AuthDTO } from './types';

export interface IAuthState extends IBaseDvaModelState {
  authInfo: AuthDTO;
}

export interface IAuthEffects {
  signIn: Effect;
  signOut: Effect;
  restorePassword: Effect;
  resetPassword: Effect;
}

export interface IAuthReducers extends ICommonReducers<IAuthState> {
  saveAuthInfo: Reducer<IAuthState>;
  clearAuthInfo: Reducer<IAuthState>;
  setLoginError: Reducer<IAuthState>;
  clearGlobalLoginError: Reducer<IAuthState>;
}

export interface IAuthModel {
  namespace: 'auth';
  state: IAuthState;
  effects: IAuthEffects;
  reducers: IAuthReducers;
}
