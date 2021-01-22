import effects from './effects';
import reducers from './reducers';

import { TODOS } from './constants';

import type { ITodosModelType } from './interfaces';

const Model: ITodosModelType = {
  namespace: TODOS.NAMESPACE,
  state: {
    todos: [],
    errors: [],
  },
  effects,
  reducers,
}

export default Model;
