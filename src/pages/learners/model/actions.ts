/**
 * Description: Learners module DVA model actions
 */

import type { Action } from 'umi';

import type { ActionPayload } from 'models/connect';

import { LEARNERS } from './constants';
import { EditLearnerDTO } from './types';

const { getNamespace, EFFECTS, ACTIONS } = LEARNERS;

export const getLearnersListActionCreator = (
  params: API.RequestParams,
): ActionPayload<API.RequestParams> => ({
  type: getNamespace(EFFECTS.GET_LIST),
  payload: params,
});

export const clearLearnersGlobalErrorActionCreator = (): Action => ({
  type: getNamespace(ACTIONS.CLEAR_GLOBAL_ERROR),
});

export const clearLearnersValidationErrorsActionCreator = (): Action => ({
  type: getNamespace(ACTIONS.CLEAR_VALIDATION_ERRORS),
});

export const clearLearnersListActionCreator = (): Action => ({
  type: getNamespace(ACTIONS.CLEAR_LIST),
});

export const clearLearnersDetailsActionCreator = (): Action => ({
  type: getNamespace(ACTIONS.CLEAR_DETAILS),
});

export const getLearnerDetailsActionCreator = (id: number): ActionPayload<number> => ({
  type: getNamespace(EFFECTS.GET_DETAILS),
  payload: id,
});

export const removeLearnerActionCreator = (id: number, params: API.RequestParams): ActionPayload<number> => ({
  type: getNamespace(EFFECTS.REMOVE),
  payload: id,
  params,
});

export const editLearnerActionCreator = (dto: EditLearnerDTO): ActionPayload<EditLearnerDTO> => ({
  type: getNamespace(EFFECTS.EDIT_DETAILS),
  payload: dto,
});
