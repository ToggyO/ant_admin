/**
 * Description: Countries module API constants
 */

export const GLOBAL = {
  NAMESPACE: 'global',

  EFFECTS: {
    GET_COUNTRIES_LIST: 'getCountriesList',
    CHANGE_AVATAR: 'changeAvatar',
    CHANGE_EMAIL: 'changeEmail',
    CHANGE_PASSWORD: 'changePassword',
  },

  ACTIONS: {
    SAVE_COUNTRIES_LIST: 'saveCountriesList',
  },

  getNamespace(action: string) {
    return `global/${action}`;
  },
} as const;
