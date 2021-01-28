/**
 * Description: Todos module DVA model reducers
 */

import { CommonReducers } from 'models/common-reducers';

import type { IAuthReducers, IAuthState } from './interfaces';
import type { AuthDTO } from './types';

// FIXME: change response payload
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

  ...new CommonReducers<IAuthState>(),
} as IAuthReducers;
