/**
 * Description: Academics module DVA model
 */

import type { AntPagination } from 'utils/helpers';

import effects from './effects';
import reducers from './reducers';
import type { IAcademicsModel } from './interfaces';
import { ACADEMICS } from './constants';
import type { Academic } from './types';

const Model: IAcademicsModel = {
  namespace: ACADEMICS.NAMESPACE,
  state: {
    list: [],
    pagination: {} as AntPagination,
    details: {} as Academic,
    globalError: {} as API.ErrorResponse,
    validationErrors: [],
  },
  effects,
  reducers,
};

export default Model;
