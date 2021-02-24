/**
 * Description: Global module DVA model effects
 */

import type { Action } from 'umi';
import type { AnyAction } from 'redux';

import { AntMessages, createFormDataDto } from 'utils/helpers';
import { getCountriesList } from 'models/global/service';
import { PROFILE } from 'pages/Profile/model/constants';
import { uploadAvatarRequest } from 'services/user/service';
import { EntityTypes } from 'enums/EntityTypes';
import { ACADEMICS } from 'pages/academics/model/constants';
import { LEARNERS } from 'pages/learners/model/constants';
import type { Country } from 'models/global/types';
import type { UploadAvatarDTO } from 'services/user/types';
import type { ActionPayload } from 'models/connect';

import { commonEffects } from '../common.effects';

import { GLOBAL } from './constants';
import type { IGlobalEffects } from './interfaces';

const { ACTIONS } = GLOBAL;

export default {
  *getCountriesList(_, { call, put }) {
    try {
      const response: API.SuccessResponse<API.List<Country>> = yield call(getCountriesList);
      yield put({
        type: ACTIONS.SAVE_COUNTRIES_LIST,
        payload: response.data.items,
      });
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },

  *changeAvatar({ payload }, { call, put }) {
    const typedPayload = payload as UploadAvatarDTO;
    const data = createFormDataDto<UploadAvatarDTO>(typedPayload);
    try {
      yield call(uploadAvatarRequest, data);
      yield getDetailsAction(put, typedPayload.entityType, typedPayload.targetId);
      AntMessages.editUserDetailsSuccess();
    } catch (error) {
      AntMessages.internalError();
      yield commonEffects.putErrors(error, put);
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *changeEmail({ payload }, { call, put }) {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *changePassword({ payload }, { call, put }) {},
} as IGlobalEffects;

function* getDetailsAction(
  put: <A extends AnyAction>(action: A) => any,
  entityType: EntityTypes,
  id?: number,
) {
  let actionCreator: ActionPayload<any> | Action;
  switch (entityType) {
    case EntityTypes.Academic:
      actionCreator = {
        type: ACADEMICS.getNamespace(ACADEMICS.EFFECTS.GET_DETAILS),
        payload: id,
      };
      break;
    case EntityTypes.Learner:
      actionCreator = {
        type: LEARNERS.getNamespace(LEARNERS.EFFECTS.GET_DETAILS),
        payload: id,
      };
      break;
    default:
      actionCreator = {
        type: PROFILE.getNamespace(PROFILE.EFFECTS.FETCH_CURRENT),
      };
      break;
  }
  yield put(actionCreator);
}
