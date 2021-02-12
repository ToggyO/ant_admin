/**
 * Description: Auth module DVA model effects
 */

import { checkTokens, signOutRedirect, writeTokens } from 'services/auth';
import { PROFILE } from 'pages/Profile/model/constants';
import { getRedirectUrl } from 'utils/utils';
import { clearTokens } from 'services/auth';

import type { AuthCredentialsDTO } from '../types';

import { signIn, signOut } from './service';

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
      const response: API.SuccessResponse<AuthDTO> = yield call(signIn, { email, password });
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
      const { data } = error;
      yield put({ type: AUTH.ACTIONS.SET_LOGIN_ERROR, payload: data });
    }
  },

  *signOut(_, { call, put }) {
    try {
      yield call(signOut);
      yield put({ type: AUTH.ACTIONS.CLEAR_AUTH_INFO });
      yield put({ type: PROFILE.getNamespace(PROFILE.ACTIONS.CLEAR_USER_INFO) });
      yield clearTokens();
      yield signOutRedirect();
    } catch (error) {
      yield put({ type: AUTH.ACTIONS.PUT_VALIDATION_ERRORS, payload: error });
    }
  },
} as IAuthEffects;
