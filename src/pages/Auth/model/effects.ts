/**
 * Description: Auth module DVA model effects
 */

import { history } from 'umi';

import { ROUTES } from 'config/constants';
import { checkTokens, signOutRedirect, writeTokens } from 'services/auth';
import { PROFILE } from 'pages/Profile/model/constants';
import { getRedirectUrl } from 'utils/utils';
import { clearTokens } from 'services/auth';
import { commonEffects } from 'models/common.effects';
import { AntMessages } from 'utils/helpers';

import type { AuthCredentialsDTO, ResetPasswordDTO, RestorePasswordDTO } from '../types';

import { resetPasswordRequest, restorePasswordRequest, signInRequest, signOutRequest } from './service';
import { AUTH } from './constants';
import type { IAuthEffects } from './interfaces';
import type { AuthDTO } from './types';

export default {
  *signIn({ payload }, { call, put }) {
    try {
      if (checkTokens()) {
        return;
      }

      const { email, password, rememberMe } = payload as AuthCredentialsDTO;
      const response: API.SuccessResponse<AuthDTO> = yield call(signInRequest, { email, password });
      const { accessToken, refreshToken } = response.data;

      yield writeTokens(accessToken, refreshToken, rememberMe);

      const redirect = yield getRedirectUrl();

      yield put({
        type: AUTH.ACTIONS.SAVE_AUTH_INFO,
        payload: { accessToken, refreshToken },
      });
      yield put({
        type: PROFILE.getNamespace(PROFILE.EFFECTS.FETCH_CURRENT),
        payload: {
          withRedirect: true,
          redirect,
        },
      });
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },

  *signOut(_, { call, put }) {
    try {
      yield call(signOutRequest);
      yield put({ type: AUTH.ACTIONS.CLEAR_AUTH_INFO });
      yield put({ type: PROFILE.getNamespace(PROFILE.ACTIONS.CLEAR_USER_INFO) });
      yield clearTokens();
      yield signOutRedirect();
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },

  *restorePassword({ payload }, { call, put }) {
    try {
      const data = payload as RestorePasswordDTO;
      yield call(restorePasswordRequest, data);
      yield history.push(ROUTES.AUTH.RESET_PASSWORD);
      AntMessages.restorePasswordSuccess(data.email);
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },

  *resetPassword({ payload }, { call, put }) {
    try {
      const data = payload as ResetPasswordDTO;
      yield call(resetPasswordRequest, data);
      yield history.push(ROUTES.AUTH.SIGN_IN);
      AntMessages.changePasswordSuccess();
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },
} as IAuthEffects;
