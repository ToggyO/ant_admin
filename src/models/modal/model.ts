/**
 * Description: Modal DVA model
 */

import reducers from './reducers';
import type { IModalModel } from './interfaces';
import { MODAL } from './constants';

const Model: IModalModel = {
  namespace: MODAL.NAMESPACE,
  state: {
    modalKeys: [],
  },
  reducers,
};

export default Model;
