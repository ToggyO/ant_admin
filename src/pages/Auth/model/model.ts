/**
 * Description: Auth module DVA model
 */

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants';
import { getFromLocalState } from 'utils/storage';

import type { User } from 'pages/Auth/model/types';

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
    user: {} as User,
    errors: [],
  },
  effects,
  reducers,
};

export default Model;
