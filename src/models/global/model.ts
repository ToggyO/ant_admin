/**
 * Description: Global DVA model
 */

import effects from './effects';
import reducers from './reducers';
import { GLOBAL } from './constants';
import type { IGlobalModel } from './interfaces';

const Model: IGlobalModel = {
  namespace: GLOBAL.NAMESPACE,
  state: {
    countries: [],
  },
  effects,
  reducers,
};

export default Model;
