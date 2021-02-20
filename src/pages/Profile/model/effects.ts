/**
 * Description: Profile module DVA model effects
 */

import { history } from 'umi';

import { MODAL_KEYS } from '@/constants';
import { commonEffects } from 'models/common.effects';
import { fetchCurrentUser } from 'services/user/service';
import { ROUTES } from 'config/constants';
import { UserRoles } from 'enums/UserRoles';
import { AUTH } from 'pages/Auth/model/constants';
import { MODAL } from 'models/modal/constants';
import { AntMessages } from 'utils/helpers';

import type { ChangePasswordDTO } from '../types';

import { PROFILE } from './constants';
import type { User } from './types';
import type { IProfileEffects } from './interfaces';
import { changePasswordRequest } from './service';

export default {
  *fetchCurrent({ payload = {} }, { call, put }) {
    try {
      const { withRedirect = false, redirect } = payload as { withRedirect: boolean; redirect: string };
      const response: API.SuccessResponse<{ user: User }> = yield call(fetchCurrentUser);
      const { user } = response.data;

      if (user.role !== UserRoles.Admin) {
        yield put({
          type: AUTH.getNamespace(AUTH.EFFECTS.SIGN_OUT),
        });
        AntMessages.accessDenied();
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *changeEmail({ payload }, { call, put }) {},

  *changePassword({ payload }, { call, put }) {
    try {
      const data = payload as ChangePasswordDTO;
      yield call(changePasswordRequest, data);
      yield put({
        type: MODAL.getNamespace(MODAL.ACTIONS.CLOSE_MODAL),
        payload: MODAL_KEYS.CHANGE_PASSWORD,
      });
      AntMessages.changePasswordSuccess();
    } catch (error) {
      AntMessages.changePasswordError();
      yield commonEffects.putErrors(error, put);
    }
  },
} as IProfileEffects;
