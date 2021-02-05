/**
 * Description: Auth module DVA model constants
 */

export const AUTH = {
  NAMESPACE: 'auth',

  EFFECTS: {
    SIGN_IN: 'signIn',
    SIGN_OUT: 'signOut',
  },

  ACTIONS: {
    SAVE_AUTH_INFO: 'saveAuthInfo',
    CLEAR_AUTH_INFO: 'clearAuthInfo',
    SET_LOGIN_ERROR: 'setLoginError',
    CLEAR_LOGIN_ERROR: 'clearLoginError',
    PUT_VALIDATION_ERRORS: 'putValidationErrors',
    CLEAR_VALIDATION_ERRORS: 'clearValidationErrors',
  },

  getNamespace(action: string) {
    return `auth/${action}`;
  },
} as const;
