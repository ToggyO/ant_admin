/**
 * Description: Auth module DVA model effects
 */

import { PROFILE } from 'pages/Profile/model/constants';

import { writeTokens } from 'services/auth';

import { signIn, signOut } from '../service';
import type { AuthCredentialsDTO } from '../types';

import { AUTH } from './constants';
import type { IAuthEffects } from './interfaces';
import type { AuthDTO } from './types';

export default {
  *signIn({ payload }, { call, put }) {
    try {
      // FIXME: change response payload
      const { email, password, rememberMe } = payload as AuthCredentialsDTO;
      const response: API.SuccessResponse<AuthDTO> = yield call(signIn, { email, password });
      const { accessToken, refreshToken } = response;

      writeTokens(accessToken, refreshToken, rememberMe);

      yield put({
        type: AUTH.ACTIONS.SAVE_AUTH_INFO,
        payload: { accessToken, refreshToken },
      });
      yield put({ type: PROFILE.getNamespace(PROFILE.EFFECTS.FETCH_CURRENT) });
    } catch (error) {
      yield put({ type: AUTH.ACTIONS.PUT_ERRORS, payload: error });
    }
  },

  *signOut(_, { call, put }) {
    try {
      yield call(signOut);
      yield put({ type: AUTH.ACTIONS.CLEAR_AUTH_INFO });
    } catch (error) {
      yield put({ type: AUTH.ACTIONS.PUT_ERRORS, payload: error });
    }
  },
} as IAuthEffects;
