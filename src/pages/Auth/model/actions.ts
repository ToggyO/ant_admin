/**
 * Description: Auth module DVA model actions
 */

import type { Action } from 'umi';

import type { ActionPayload } from 'models/connect';

import type { LoginFormState, ResetPasswordDTO, RestorePasswordDTO } from '../types';

import { AUTH } from './constants';
import {} from './types';

const { getNamespace, EFFECTS, ACTIONS } = AUTH;

export const signInActionCreator = (values: LoginFormState): ActionPayload<LoginFormState> => ({
  type: getNamespace(EFFECTS.SIGN_IN),
  payload: values,
});

export const clearGlobalLoginErrorActionCreator = (): Action => ({
  type: getNamespace(ACTIONS.CLEAR_LOGIN_ERROR),
});

export const restorePasswordActionCreator = (
  data: RestorePasswordDTO,
): ActionPayload<RestorePasswordDTO> => ({
  type: getNamespace(EFFECTS.RESTORE_PASSWORD),
  payload: data,
});

export const resetPasswordActionCreator = (data: ResetPasswordDTO): ActionPayload<ResetPasswordDTO> => ({
  type: getNamespace(EFFECTS.RESET_PASSWORD),
  payload: data,
});
