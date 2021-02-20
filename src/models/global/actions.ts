/**
 * Description: Countries module API actions
 */

import type { Action } from 'umi';

import { GLOBAL } from './constants';

const { EFFECTS, getNamespace } = GLOBAL;

export const getCountriesListActionCreator = (): Action => ({
  type: getNamespace(EFFECTS.GET_COUNTRIES_LIST),
});
