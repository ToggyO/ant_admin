/**
 * Description: Academics module DVA model
 */

import effects from './effects';
import reducers from './reducers';
import type { IAcademicsModel } from './interfaces';
import { ACADEMICS } from './constants';
import type { Academic } from './types';

const Model: IAcademicsModel = {
  namespace: ACADEMICS.NAMESPACE,
  state: {
    list: [],
    details: {} as Academic,
    validationErrors: [],
  },
  effects,
  reducers,
};

export default Model;
