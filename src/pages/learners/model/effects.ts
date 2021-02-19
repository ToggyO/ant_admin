/**
 * Description: Learners module DVA model effects
 */

import { DefaultPaginationValues } from 'enums/DefaultTableQueryParams';
import { commonEffects } from 'models/common.effects';
import { AntMessages, createFormDataDto } from 'utils/helpers';
import { editUserRequest } from 'services/user';

import { LEARNERS } from './constants';
import type { ILearnersEffects } from './interfaces';
import type { EditLearnerDTO, Learner } from './types';
import { getLearnersListRequest, getLearnerDetailsRequest, removeLearnerRequest } from './service';

const { ACTIONS, EFFECTS } = LEARNERS;

export default {
  *getList({ payload }, { call, put }) {
    const params = payload as API.RequestParams;
    try {
      let response: API.SuccessResponse<API.List<Learner>> = yield call(getLearnersListRequest, params);
      // FIXME: rename
      const cond1 = !response.data.items.length;
      const cond2 = params.pageSize > DefaultPaginationValues.Page;
      if (cond1 && cond2) {
        // debugger
        response = yield call(getLearnersListRequest, { ...params, page: params.page - 1 });
        // debugger
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
      const response: API.SuccessResponse<{ user: Learner }> = yield call(getLearnerDetailsRequest, id);
      yield put({
        type: ACTIONS.SAVE_DETAILS,
        payload: response.data.user,
      });
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },

  *editDetails({ payload }, { call, put }) {
    const data = createFormDataDto<EditLearnerDTO>(payload);
    try {
      yield call(editUserRequest, data);
      yield put({
        type: EFFECTS.GET_DETAILS,
        payload: payload.targetId,
      });
      AntMessages.editUserDetailsSuccess();
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },

  *remove({ payload, params }, { call, put }) {
    const id = payload as number;
    try {
      yield call(removeLearnerRequest, id);
      yield put({
        type: EFFECTS.GET_LIST,
        payload: params,
      });
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },
} as ILearnersEffects;
