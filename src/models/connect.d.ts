/**
 * Description: Main DVA interfaces
 */

import type { Action } from 'umi';
import type { MenuDataItem } from '@ant-design/pro-layout';

import type { ITodosState } from 'pages/Todos/model/interfaces';

import type { IAuthState } from 'pages/Auth/model/interfaces';
import type { IProfileState } from 'pages/Profile/model/interfaces';

import { DefaultSettings as SettingModelState } from '../../config/defaultSettings';

export { GlobalModelState, SettingModelState };

export type LoadingEffects = Record<string, boolean | undefined>;

export type LoadingModels = {
  todos: boolean | undefined;
  auth: boolean | undefined;
  profile: boolean | undefined;
};

export interface ILoading {
  global: boolean;
  effects: LoadingEffects;
  models: LoadingModels;
}

export interface ConnectState {
  loading: ILoading;
  todos: ITodosState;
  auth: IAuthState;
  profile: IProfileState;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}

export interface ActionPayload<T, R extends string = string> extends Action<R> {
  payload: T;
}
