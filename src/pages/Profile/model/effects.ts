/**
 * Description: Profile module DVA model effects
 */

import { history } from 'umi';
import { message } from 'antd';

import { ANT_MESSAGE_KEYS, ERROR_MESSAGES } from '@/constants';
import { fetchCurrentUser } from 'services/user';
import { ROUTES } from 'config/constants';
import { UserRoles } from 'enums/UserRoles';
import { AUTH } from 'pages/Auth/model/constants';

import { PROFILE } from './constants';
import type { User } from './types';
import type { IProfileEffects } from './interfaces';

export default {
  *fetchCurrent({ payload = {} }, { call, put }) {
    try {
      const { withRedirect = false, redirect } = payload as { withRedirect: boolean; redirect: string };
      const response: API.SuccessResponse<{ user: User }> = yield call(fetchCurrentUser);
      const { user } = response.data;

      // FIXME: check
      if (user.role !== UserRoles.Admin) {
        yield put({
          type: AUTH.getNamespace(AUTH.EFFECTS.SIGN_OUT),
        });
        message.error({
          content: ERROR_MESSAGES.LOGIN.ACCESS_DENIED,
          duration: 5,
          key: ANT_MESSAGE_KEYS.ACCESS_DENIED,
        });
        return;
      }

      yield put({ type: PROFILE.ACTIONS.SAVE_USER_INFO, payload: user });
      if (withRedirect) {
        yield history.push(redirect || '/');
      }
    } catch (error) {
      // FIXME: check
      // yield put({ type: PROFILE.ACTIONS.PUT_VALIDATION_ERRORS });
      yield history.push(ROUTES.AUTH.SIGN_IN);
    }
  },
} as IProfileEffects;
