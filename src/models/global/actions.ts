/**
 * Description: Countries module API actions
 */

import type { Action } from 'umi';

import type { UploadAvatarDTO } from 'services/user/types';

import { GLOBAL } from './constants';

const { EFFECTS, getNamespace } = GLOBAL;

export const getCountriesListActionCreator = (): Action => ({
  type: getNamespace(EFFECTS.GET_COUNTRIES_LIST),
});

export const changeAvatarActionCreator = (dto: UploadAvatarDTO) => ({
  type: getNamespace(EFFECTS.CHANGE_AVATAR),
  payload: dto,
});
