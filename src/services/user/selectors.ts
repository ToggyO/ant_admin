/**
 * Description: User module API selectors
 */

import { createSelector } from 'reselect';

import type { ConnectState } from 'models/connect';
import { getImageUrl } from 'services/helpers';
import type { CurrentUser } from 'pages/Profile/model/types';

export const currentUserSelector = createSelector<ConnectState, CurrentUser, CurrentUser>(
  (state) => state.profile.user,
  (user) => ({
    ...user,
    avatar: getImageUrl(user.avatar as string),
  }),
);
