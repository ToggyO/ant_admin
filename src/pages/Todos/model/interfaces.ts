/**
 * Description: Todos module model interfaces
 */

import type { Effect, Reducer, Subscription } from 'umi';
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
  saveTodos: Reducer<ITodosState, AnyAction>;
  clearTodos: Reducer<ITodosState, AnyAction>;
  // putErrors: Reducer<ITodosState, AnyAction>;
  // clearErrors: Reducer<ITodosState, AnyAction>;
}

export interface ITodosSubscriptions {
  setup: Subscription;
}

export interface ITodosModelType {
  namespace: 'todos';
  state: ITodosState;
  effects: ITodosEffects;
  reducers: ITodosReducers;
  subscriptions: ITodosSubscriptions;
}
