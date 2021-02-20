/**
 * Description: Global module DVA model effects
 */

import { AntMessages, createFormDataDto } from 'utils/helpers';
import { getCountriesList } from 'models/global/service';
import { PROFILE } from 'pages/Profile/model/constants';
import { uploadAvatarRequest } from 'services/user/service';
import type { Country } from 'models/global/types';
import type { UploadAvatarDTO } from 'services/user/types';

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
    const data = createFormDataDto<UploadAvatarDTO>(payload);
    try {
      yield call(uploadAvatarRequest, data);
      yield put({ type: PROFILE.getNamespace(PROFILE.EFFECTS.FETCH_CURRENT) });
      AntMessages.editUserDetailsSuccess();
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *changeEmail({ payload }, { call, put }) {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *changePassword({ payload }, { call, put }) {},
} as IGlobalEffects;
