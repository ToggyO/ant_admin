/**
 * Description: Profile module DVA model effects
 */

import { history } from 'umi';

import { fetchCurrentUser } from 'services/user';
import { ROUTES } from 'config/constants';

import type { User } from './types';
import { PROFILE } from './constants';
import type { IProfileEffects } from './interfaces';

// FIXME: change response payload
export default {
  *fetchCurrent({ payload = {} }, { call, put }) {
    try {
      const { withRedirect = false, redirect } = payload as { withRedirect: boolean; redirect: string };
      const response: API.SuccessResponse<{ user: User }> = yield call(fetchCurrentUser);
      const { user } = response;
      yield put({ type: PROFILE.ACTIONS.SAVE_USER_INFO, payload: user });
      if (withRedirect) {
        yield history.push(redirect || '/');
      }
    } catch (error) {
      yield put({ type: PROFILE.ACTIONS.PUT_ERRORS });
      yield history.push(ROUTES.AUTH.SIGN_IN);
    }
  },
} as IProfileEffects;
