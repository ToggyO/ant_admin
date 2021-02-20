/**
 * Description: User module API selectors
 */

import { createSelector } from 'reselect';

import type { ConnectState } from 'models/connect';
import { getImageUrl } from 'services/helpers';
import type { CurrentUser, User } from 'pages/Profile/model/types';

export const currentUserSelector = createSelector<ConnectState, User, CurrentUser>(
  (state) => state.profile.user,
  (user) => ({
    ...user,
    country: user.country?.id,
    avatar: getImageUrl(user.avatar as string),
  }),
);
