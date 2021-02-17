/**
 * Description: Common DVA model effects
 */

import type { AnyAction } from 'redux';

export interface ICommonEffects {
  putErrors: (error: { data: API.ErrorResponse }, put: <A extends AnyAction>(action: A) => any) => void;
}

export const commonEffects = {
  *putErrors(error, put) {
    const { data } = error;
    if (data.errors) {
      return yield put({ type: 'putValidationErrors', payload: data.errors });
    }
    return yield put({ type: 'putGlobalError', payload: data });
  },
} as ICommonEffects;
