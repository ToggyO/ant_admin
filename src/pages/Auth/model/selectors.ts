/**
 * Description: Auth module DVA model selectors
 */

import type { ConnectState } from 'models/connect';

export const loginGlobalErrorSelector = (state: ConnectState): API.ErrorResponse => state.auth.globalError;
