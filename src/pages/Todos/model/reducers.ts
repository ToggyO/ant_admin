/**
 * Description: Todos module model reducers
 */

import { CommonReducers } from 'models/common-reducers';

import type { ITodosReducers, ITodosState } from './interfaces';

export default {
  saveTodos(state, { payload }) {
    return { ...state, todos: payload };
  },

  clearTodos(state) {
    return { ...state, todos: [] };
  },
  ...new CommonReducers<ITodosState>(),
} as ITodosReducers;

// putErrors(state, { payload }) {
//   const { errors = [] } = payload;
//   return {
//     ...state,
//     errors,
//   };
// },
//
// clearErrors(state) {
//   return {
//     ...state,
//     errors: [],
//   };
// },
