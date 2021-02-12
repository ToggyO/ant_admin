/**
 * Description: Profile module DVA model
 */

import effects from './effects';
import reducers from './reducers';

import { PROFILE } from './constants';
import type { IProfileModel } from './interfaces';
import type { CurrentUser } from './types';

const Model: IProfileModel = {
  namespace: PROFILE.NAMESPACE,
  state: {
    user: {} as CurrentUser,
    globalError: {} as API.ErrorResponse,
    validationErrors: [],
  },
  effects,
  reducers,
};

export default Model;
