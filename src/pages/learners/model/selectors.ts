/**
 * Description: Learners module API selectors
 */

import { createSelector } from 'reselect';

import { getImageUrl } from 'services/helpers';
import type { ConnectState } from 'models/connect';
import type { Learner, LearnerTableItem } from 'pages/learners/model/types';
import type { AntPagination } from 'utils/helpers';

export const learnersListSelector = createSelector<ConnectState, Learner[], LearnerTableItem[]>(
  (state) => state.learners.list,
  (learners) =>
    learners.map((learner) => ({
      id: learner.id,
      name: learner.name,
      email: learner.email,
      trialStarted: learner.trialStarted,
    })),
);

export const learnersPaginationSelector = (state: ConnectState): AntPagination => state.learners.pagination;

export const learnerDetailsSelector = createSelector<ConnectState, Learner, Learner>(
  (state) => state.learners.details,
  (details) => ({
    ...details,
    avatar: getImageUrl(details.avatar as string),
  }),
);
