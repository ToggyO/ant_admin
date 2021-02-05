/**
 * Description: Auth module DVA model
 */

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants';

import { getFromLocalState } from 'services/storage';

import effects from './effects';
import reducers from './reducers';
import type { IAuthModel } from './interfaces';
import { AUTH } from './constants';

const Model: IAuthModel = {
  namespace: AUTH.NAMESPACE,
  state: {
    authInfo: {
      accessToken: getFromLocalState<string>(ACCESS_TOKEN),
      refreshToken: getFromLocalState<string>(REFRESH_TOKEN),
    },
    loginError: {} as API.ErrorResponse,
    validationErrors: [],
  },
  effects,
  reducers,
};

export default Model;
