/**
 * Description: Todos module model interfaces
 */

import type { Effect, Reducer } from 'umi';
import type { AnyAction } from 'redux';

import type { Todo } from './types';

export interface ITodosState {
  todos: Todo[];
  errors: any[];
}

export interface ITodosEffects {
  fetchTodos: Effect;
}

export interface ITodosReducers {
  saveTodos: Reducer<Pick<ITodosState, 'todos'>, AnyAction>;
  clearTodos: Reducer<Pick<ITodosState, 'todos'>, AnyAction>;
  putErrors: Reducer<Pick<ITodosState, 'errors'>, AnyAction>;
  clearErrors: Reducer<Pick<ITodosState, 'errors'>, AnyAction>;
}

export interface ITodosModelType {
  namespace: 'todos',
  state: ITodosState;
  effects: ITodosEffects,
  reducers: ITodosReducers,
}

