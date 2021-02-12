/**
 * Description: Auth module DVA model selectors
 */

import type { ConnectState } from 'models/connect';

export const loginErrorSelector = (state: ConnectState): API.ErrorResponse => state.auth.globalError;
