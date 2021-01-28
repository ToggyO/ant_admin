/**
 * Description: Auth module DVA model actions
 */

import type { ActionPayload } from 'models/connect';

import type { LoginFormState } from '../types';

import { AUTH } from './constants';

const { getNamespace, EFFECTS } = AUTH;

export const signInActionCreator = (values: LoginFormState): ActionPayload<LoginFormState> => ({
  type: getNamespace(EFFECTS.SIGN_IN),
  payload: values,
});
