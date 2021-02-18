/**
 * Description: Academics module API selectors
 */

import { createSelector } from 'reselect';
import type { ConnectState } from 'models/connect';
import type { AntPagination } from 'utils/helpers';
import { getImageUrl } from 'services/helpers';

import type { Academic, AcademicTableItem } from './types';

export const academicsListSelector = createSelector<ConnectState, Academic[], AcademicTableItem[]>(
  (state) => state.academics.list,
  (academics) =>
    academics.map((academic) => ({
      id: academic.id,
      name: academic.name,
      email: academic.email,
      trialStarted: academic.trialStarted,
    })),
);

export const academicsPaginationSelector = (state: ConnectState): AntPagination => state.academics.pagination;

export const academicDetailsSelector = createSelector<ConnectState, Academic, Academic>(
  (state) => state.academics.details,
  (details) => ({
    ...details,
    avatar: getImageUrl(details.avatar as string),
  }),
);

export const academicGlobalErrorSelector = (state: ConnectState): API.ErrorResponse =>
  state.academics.globalError;

export const academicValidationErrorsSelector = (state: ConnectState): API.ValidationApiError[] =>
  state.academics.validationErrors;
