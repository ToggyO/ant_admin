/**
 * Description: Todos module model effects
 */

import { getTodos } from '../service';

import { TODOS } from './constants';
import type { ITodosEffects } from './interfaces';

export default {
  *fetchTodos(_, { call, put }) {
    try {
      const response = yield call(getTodos);
      yield put({
        type: TODOS.ACTIONS.SAVE_TODOS,
        payload: response,
      });
    } catch (error) {
      yield put({ type: TODOS.ACTIONS.PUT_VALIDATION_ERRORS, payload: error });
    }
  },
} as ITodosEffects;
