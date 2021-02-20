/**
 * Description: Global DVA model interfaces
 */

import type { Effect } from 'umi';
import type { Reducer } from 'redux';

import type { Country } from 'models/global/types';

export interface IGlobalState {
  countries: Country[];
}

export interface IGlobalEffects {
  getCountriesList: Effect;
  changeAvatar: Effect;
  changeEmail: Effect;
  changePassword: Effect;
}

export interface IGlobalReducers {
  saveCountriesList: Reducer<IGlobalState>;
}

export interface IGlobalModel {
  namespace: 'global';
  state: IGlobalState;
  effects: IGlobalEffects;
  reducers: IGlobalReducers;
}
