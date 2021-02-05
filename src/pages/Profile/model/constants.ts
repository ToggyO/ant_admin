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
    PUT_VALIDATION_ERRORS: 'putValidationErrors',
    CLEAR_VALIDATION_ERRORS: 'clearValidationErrors',
  },

  getNamespace(action: string) {
    return `profile/${action}`;
  },
} as const;
