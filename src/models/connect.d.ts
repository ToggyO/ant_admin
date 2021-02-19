/**
 * Description: Main DVA interfaces
 */

import type { Action } from 'umi';
import type { MenuDataItem } from '@ant-design/pro-layout';

import type { IModalState } from 'models/modal/interfaces';
import type { ITodosState } from 'pages/Todos/model/interfaces';
import type { IAuthState } from 'pages/Auth/model/interfaces';
import type { IProfileState } from 'pages/Profile/model/interfaces';
import type { IAcademicsState } from 'pages/academics/model/interfaces';
import { ILearnersState } from 'pages/learners/model/interfaces';

import { DefaultSettings as SettingModelState } from '../../config/defaultSettings';

export { GlobalModelState, SettingModelState };

export type LoadingEffects = Record<string, boolean | undefined>;

export type LoadingModels = {
  modal: boolean | undefined;
  todos: boolean | undefined;
  auth: boolean | undefined;
  profile: boolean | undefined;
  academics: boolean | undefined;
  learners: boolean | undefined;
};

export interface ILoading {
  global: boolean;
  effects: LoadingEffects;
  models: LoadingModels;
}

export interface ConnectState {
  loading: ILoading;
  modal: IModalState;
  todos: ITodosState;
  auth: IAuthState;
  profile: IProfileState;
  academics: IAcademicsState;
  learners: ILearnersState;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}

export interface ActionPayload<T, R extends string = string> extends Action<R> {
  payload: T;
  params?: Record<string, any>;
}

export type ActionCreator<T = any, R extends string = string> = (
  ...args: any[]
) => ActionPayload<T, R> | Action<R>;

export interface IApiErrors {
  globalError: API.ErrorResponse;
  validationErrors: API.ValidationApiError[];
}

export interface IBaseDvaModelState extends IApiErrors {}
