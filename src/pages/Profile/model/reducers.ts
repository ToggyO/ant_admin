/**
 * Description: Profile module DVA model reducers
 */

import { CommonReducers } from 'models/common.reducers';

import type { IProfileReducers, IProfileState } from './interfaces';
import type { CurrentUser } from './types';

export default {
  saveUserInfo(state, { payload }) {
    return {
      ...state,
      user: payload,
    };
  },

  clearUserInfo(state) {
    return {
      ...state,
      user: {} as CurrentUser,
    };
  },

  ...new CommonReducers<IProfileState>(),
} as IProfileReducers;
