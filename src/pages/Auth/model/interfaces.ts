/**
 * Description: Auth module model interfaces
 */

import type { Effect, Reducer } from 'umi';

import type { AuthDTO, User } from './types';

export interface IAuthState {
  authInfo: AuthDTO;
  user: User;
  errors: any[];
}

export interface IAuthEffects {
  signIn: Effect;
  signOut: Effect;
}

export interface IAuthReducers {
  saveAuthInfo: Reducer<IAuthState>;
  clearAuthInfo: Reducer<IAuthState>;
}

export interface IAuthModel {
  namespace: 'auth';
  state: IAuthState;
  effects: IAuthEffects;
  reducers: IAuthReducers;
}
