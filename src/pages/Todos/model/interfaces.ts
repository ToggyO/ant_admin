/**
 * Description: Todos module model interfaces
 */

import type { Effect, Reducer, Subscription } from 'umi';

import type { IBaseDvaModelState } from '@/models/connect';
import type { ICommonReducers } from 'models/common.reducers';

import type { Todo } from './types';

export interface ITodosState extends IBaseDvaModelState {
  todos: Todo[];
}

export interface ITodosEffects {
  fetchTodos: Effect;
}

export interface ITodosReducers extends ICommonReducers<ITodosState> {
  saveTodos: Reducer<ITodosState>;
  clearTodos: Reducer<ITodosState>;
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
