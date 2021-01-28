/**
 * Description: Profile module DVA model effects
 */

import { fetchCurrentUser } from 'services/user';

import type { User } from './types';
import { PROFILE } from './constants';
import type { IProfileEffects } from './interfaces';

// FIXME: change response payload
export default {
  *fetchCurrent(_, { call, put }) {
    try {
      const response: API.SuccessResponse<{ user: User }> = yield call(fetchCurrentUser);
      const { user } = response;
      yield put({ type: PROFILE.ACTIONS.SAVE_USER_INFO, payload: user });
    } catch (error) {
      yield put({ type: PROFILE.ACTIONS.PUT_ERRORS });
    }
  },
} as IProfileEffects;
