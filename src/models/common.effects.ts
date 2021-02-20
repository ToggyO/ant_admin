/**
 * Description: Common DVA model effects
 */

import type { AnyAction } from 'redux';
import type { Effect } from 'umi';

import { AntMessages, createFormDataDto } from 'utils/helpers';
import { uploadAvatarRequest } from 'services/user/service';
import type { UploadAvatarDTO } from 'services/user/types';

export interface ICommonEffects {
  putErrors: (error: { data: API.ErrorResponse }, put: <A extends AnyAction>(action: A) => any) => void;
  uploadAvatar: Effect;
}

export const commonEffects = {
  *putErrors(error, put) {
    const { data } = error;
    if (data.errors) {
      return yield put({ type: 'putValidationErrors', payload: data.errors });
    }
    return yield put({ type: 'putGlobalError', payload: data });
  },

  *uploadAvatar({ payload }, { call, put }) {
    const data = createFormDataDto<UploadAvatarDTO>(payload);
    try {
      yield call(uploadAvatarRequest, data);
      yield put({
        type: 'getDetails',
        payload: payload.targetId,
      });
      AntMessages.editUserDetailsSuccess();
    } catch (error) {
      yield commonEffects.putErrors(error, put);
    }
  },
} as ICommonEffects;
