/**
 * Description: Todos module DVA model reducers
 */

import { CommonReducers } from 'models/common.reducers';

import type { IAuthReducers, IAuthState } from './interfaces';
import type { AuthDTO } from './types';

export default {
  saveAuthInfo(state, { payload }) {
    const { accessToken, refreshToken } = payload as AuthDTO;
    return {
      ...state,
      authInfo: {
        accessToken,
        refreshToken,
      },
    };
  },

  clearAuthInfo(state) {
    return {
      ...state,
      authInfo: {
        accessToken: '',
        refreshToken: '',
      },
    };
  },

  setLoginError(state, { payload }) {
    return { ...state, globalError: payload };
  },

  clearGlobalLoginError(state) {
    return { ...state, globalError: {} as API.ErrorResponse };
  },

  ...new CommonReducers<IAuthState>(),
} as IAuthReducers;
