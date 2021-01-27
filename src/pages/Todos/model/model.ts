/**
 * Description: Todos module DVA model
 */

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
  subscriptions: {
    setup({ history, dispatch }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname }) => {
        if (pathname === '/todos') {
          dispatch({ type: 'fetchTodos' });
        }
      });
    },
  },
};

export default Model;
