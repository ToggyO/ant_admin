/**
 * Description: Main DVA interfaces
 */

import type { Action } from 'umi';
import type { MenuDataItem } from '@ant-design/pro-layout';

import type { ITodosState } from 'pages/Todos/model/interfaces';

import { DefaultSettings as SettingModelState } from '../../config/defaultSettings';

export { GlobalModelState, SettingModelState };

export type LoadingEffects = Record<string, boolean | undefined>;

export type LoadingModels = {
  todos: boolean | undefined;
};

export interface ILoading {
  global: boolean;
  effects: LoadingEffects;
  models: LoadingModels
}

export interface ConnectState {
  loading: ILoading;
  todos: ITodosState;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}

// TODO: check back-end response
// export interface BasicResponse {
//   data: {};
//   code: string;
// }
//
// export interface ErrorsFromBackend {
//   code: string;
//   message: string;
//   field: string | null;
// }
//
// export interface ErrorResponse {
//   message: string;
//   errors: ErrorsFromBackend[];
//   code: string;
// }
//
// export interface ErrorResponseData {
//   data: ErrorResponse;
// }

export type ActionPayload<T> = Action<T> & Record<string, any>;
