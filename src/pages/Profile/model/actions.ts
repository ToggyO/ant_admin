/**
 * Description: Profile module DVA model actions
 */

import { Action } from 'umi';

import type { ActionPayload } from 'models/connect';

import type { ChangePasswordDTO, ChangeCurrentUserAvatarDTO } from '../types';

import { PROFILE } from './constants';

const { EFFECTS, ACTIONS, getNamespace } = PROFILE;

export const changeAvatarActionCreator = (dto: ChangeCurrentUserAvatarDTO) => ({
  type: getNamespace(EFFECTS.CHANGE_AVATAR),
  payload: dto,
});

export const changePasswordActionCreator = (data: ChangePasswordDTO): ActionPayload<ChangePasswordDTO> => ({
  type: getNamespace(EFFECTS.CHANGE_PASSWORD),
  payload: data,
});

export const clearProfileGlobalErrorActionCreator = (): Action => ({
  type: getNamespace(ACTIONS.CLEAR_GLOBAL_ERROR),
});

export const clearProfileValidationErrorActionCreator = (): Action => ({
  type: getNamespace(ACTIONS.CLEAR_VALIDATION_ERRORS),
});
