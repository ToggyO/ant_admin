/**
 * Description: Global module DVA model effects
 */

import { getCountriesList } from 'models/global/service';
import type { Country } from 'models/global/types';

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *changeAvatar({ payload }, { call, put }) {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *changeEmail({ payload }, { call, put }) {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *changePassword({ payload }, { call, put }) {},
} as IGlobalEffects;
