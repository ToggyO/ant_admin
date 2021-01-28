/**
 * Description: Profile module DVA model constants
 */

export const PROFILE = {
  NAMESPACE: 'profile',

  EFFECTS: {
    FETCH_CURRENT: 'fetchCurrent',
  },

  ACTIONS: {
    SAVE_USER_INFO: 'saveUserInfo',
    CLEAR_USER_INFO: 'clearUserInfo',
    PUT_ERRORS: 'putErrors',
    CLEAR_ERRORS: 'clearErrors',
  },

  getNamespace(action: string) {
    return `profile/${action}`;
  },
} as const;
