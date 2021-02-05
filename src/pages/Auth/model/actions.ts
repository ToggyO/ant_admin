/**
 * Description: Auth module DVA model actions
 */

import type { Action } from 'umi';

import type { ActionPayload } from 'models/connect';

import type { LoginFormState } from '../types';

import { AUTH } from './constants';

const { getNamespace, EFFECTS, ACTIONS } = AUTH;

export const signInActionCreator = (values: LoginFormState): ActionPayload<LoginFormState> => ({
  type: getNamespace(EFFECTS.SIGN_IN),
  payload: values,
});

export const clearLoginError = (): Action => ({
  type: getNamespace(ACTIONS.CLEAR_LOGIN_ERROR),
});
