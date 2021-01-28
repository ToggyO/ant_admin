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
    PUT_ERRORS: 'putErrors',
    CLEAR_ERRORS: 'clearErrors',
  },

  getNamespace(action: string) {
    return `auth/${action}`;
  },
} as const;
