/**
 * Description: Profile module DVA model selectors
 */

import type { ConnectState } from 'models/connect';
import type { CurrentUser } from 'pages/Profile/model/types';

export const currentUserSelector = (state: ConnectState): CurrentUser => state.profile.user;
