/**
 * Description: Todos module model reducers
 */

import type { ITodosReducers } from './interfaces';

export default {
  saveTodos(state, { payload }) {
    return { ...state, todos: payload };
  },

  clearTodos(state) {
    return { ...state, todos: [] };
  },

  putErrors(state, { payload }) {
    const { errors = [] } = payload;
    return {
      ...state,
      errors,
    };
  },

  clearErrors(state) {
    return {
      ...state,
      errors: [],
    };
  },
} as ITodosReducers;
