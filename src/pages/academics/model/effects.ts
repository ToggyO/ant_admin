/**
 * Description: Academics module DVA model effects
 */

import { MODAL_KEYS } from '@/constants';
import { MODAL } from 'models/modal/constants';
import { UserRoles } from 'enums/UserRoles';

import type { IAcademicsEffects } from './interfaces';
import { ACADEMICS } from './constants';
import { getAcademicsList, getAcademicDetails, createAcademic } from './service';
import type { Academic } from './types';

const { ACTIONS, EFFECTS } = ACADEMICS;

// @ts-ignore
function* putErrors(error, put) {
  yield put({ type: ACTIONS.PUT_GLOBAL_ERROR, payload: error });
  if (error.errors) {
    yield put({ type: ACTIONS.PUT_VALIDATION_ERRORS, payload: error.errors });
  }
}

export default {
  *getList({ payload }, { call, put }) {
    const params = payload as API.RequestParams;
    try {
      const response: API.SuccessResponse<API.List<Academic>> = yield call(getAcademicsList, params);
      yield put({
        type: ACTIONS.SAVE_LIST,
        payload: {
          items: response.data.items,
          pagination: response.data.pagination,
        },
      });
    } catch (error) {
      yield putErrors(error, put);
    }
  },

  *getDetails({ payload }, { call, put }) {
    const id = payload as number;
    try {
      const response: API.SuccessResponse<{ user: Academic }> = yield call(getAcademicDetails, id);
      yield put({
        type: ACTIONS.SAVE_DETAILS,
        payload: response.data.user,
      });
    } catch (error) {
      yield putErrors(error, put);
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *editDetails({ payload }, { call, put }) {},

  *create({ payload, params }, { call, put }) {
    try {
      yield call(createAcademic, payload);
      yield put({
        type: EFFECTS.GET_LIST,
        payload: { ...params, role: UserRoles.Academic },
      });
      yield put({ type: ACTIONS.CLEAR_VALIDATION_ERRORS });
      yield put({
        type: MODAL.getNamespace(MODAL.ACTIONS.CLOSE_MODAL),
        payload: MODAL_KEYS.CREATE_USER,
      });
    } catch (error) {
      yield putErrors(error, put);
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *remove({ payload }, { call, put }) {},
} as IAcademicsEffects;
