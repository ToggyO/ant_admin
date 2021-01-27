/**
 * Description: Auth module model effects
 */

import { signIn, signOut } from '../service';

import type { IAuthEffects } from './interfaces';
import { AUTH } from './constants';

export default {
  *signIn({ payload }, { call, put }) {
    try {
      // Add response type
      const response = yield call(signIn, payload);
      // debugger;
      yield put({
        type: AUTH.ACTIONS.SAVE_AUTH_INFO,
        payload: response.data,
      });
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
