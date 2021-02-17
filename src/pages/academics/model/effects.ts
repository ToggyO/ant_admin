/**
 * Description: Academics module DVA model effects
 */

import { MODAL_KEYS } from '@/constants';
import { MODAL } from 'models/modal/constants';
import { commonEffects } from 'models/common.effects';
import { UserRoles } from 'enums/UserRoles';
import { DefaultPaginationValues } from 'enums/DefaultTableQueryParams';

import type { IAcademicsEffects } from './interfaces';
import { ACADEMICS } from './constants';
import {
  getAcademicsListRequest,
  getAcademicDetailsRequest,
  createAcademicRequest,
  removeAcademicRequest,
} from './service';
import type { Academic } from './types';

const { ACTIONS, EFFECTS } = ACADEMICS;

export default {
  *getList({ payload }, { call, put }) {
    const params = payload as API.RequestParams;
    try {
      let response: API.SuccessResponse<API.List<Academic>> = yield call(getAcademicsListRequest, params);
      // FIXME: rename
      const cond1 = !response.data.items.length;
      const cond2 = params.pageSize > DefaultPaginationValues.Page;
      if (cond1 && cond2) {
        response = yield call(getAcademicsListRequest, { ...params, page: params.page - 1 });
      }
      yield put({
        type: ACTIONS.SAVE_LIST,
        payload: {
          items: response.data.items,
          pagination: response.data.pagination,
        },
      });
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },

  *getDetails({ payload }, { call, put }) {
    const id = payload as number;
    try {
      const response: API.SuccessResponse<{ user: Academic }> = yield call(getAcademicDetailsRequest, id);
      yield put({
        type: ACTIONS.SAVE_DETAILS,
        payload: response.data.user,
      });
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *editDetails({ payload }, { call, put }) {},

  *create({ payload, params }, { call, put }) {
    try {
      yield call(createAcademicRequest, payload);
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
      yield commonEffects.putErrors(error, put);
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *remove({ payload, params }, { call, put }) {
    const id = payload as number;
    try {
      yield call(removeAcademicRequest, id);
      yield put({
        type: EFFECTS.GET_LIST,
        payload: params,
      });
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },
} as IAcademicsEffects;
