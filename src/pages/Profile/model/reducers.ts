/**
 * Description: Profile module DVA model reducers
 */

import { CommonReducers } from 'models/common-reducers';

import type { IProfileReducers, IProfileState } from './interfaces';
import type { User } from './types';

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
      user: {} as User,
    };
  },

  ...new CommonReducers<IProfileState>(),
} as IProfileReducers;
