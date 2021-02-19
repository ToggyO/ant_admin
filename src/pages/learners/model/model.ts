/**
 * Description: Learners module DVA model
 */

import type { AntPagination } from 'utils/helpers';

import effects from './effects';
import reducers from './reducers';
import type { ILearnersModel } from './interfaces';
import { LEARNERS } from './constants';
import type { Learner } from './types';

const Model: ILearnersModel = {
  namespace: LEARNERS.NAMESPACE,
  state: {
    list: [],
    pagination: {} as AntPagination,
    details: {} as Learner,
    globalError: {} as API.ErrorResponse,
    validationErrors: [],
  },
  effects,
  reducers,
};

export default Model;
