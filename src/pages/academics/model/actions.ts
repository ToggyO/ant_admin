/**
 * Description: Academics module DVA model actions
 */

import type { Action } from 'umi';

import type { ActionPayload } from 'models/connect';

import { ACADEMICS } from './constants';
import type { CreateAcademicDTO } from './types';

const { getNamespace, EFFECTS, ACTIONS } = ACADEMICS;

export const getAcademicsListActionCreator = (
  params: API.RequestParams,
): ActionPayload<API.RequestParams> => ({
  type: getNamespace(EFFECTS.GET_LIST),
  payload: params,
});

export const clearAcademicsListActionCreator = (): Action => ({
  type: getNamespace(ACTIONS.CLEAR_LIST),
});

export const getAcademicDetailsActionCreator = (id: number): ActionPayload<number> => ({
  type: getNamespace(EFFECTS.GET_DETAILS),
  payload: id,
});

export const clearAcademicDetailsActionCreator = (): Action => ({
  type: getNamespace(ACTIONS.CLEAR_DETAILS),
});

export const createAcademicActionCreator = (
  dto: API.ReloadList<CreateAcademicDTO, API.RequestParams>,
): ActionPayload<CreateAcademicDTO> => ({
  type: getNamespace(EFFECTS.CREATE),
  payload: dto.payload,
  params: dto.params,
});

export const removeAcademicActionCreator = (id: number): ActionPayload<number> => ({
  type: getNamespace(EFFECTS.REMOVE),
  payload: id,
});

export const clearAcademicsGlobalErrorActionCreator = (): Action => ({
  type: getNamespace(ACTIONS.CLEAR_GLOBAL_ERROR),
});

export const clearAcademicsValidationErrorsActionCreator = (): Action => ({
  type: getNamespace(ACTIONS.CLEAR_VALIDATION_ERRORS),
});