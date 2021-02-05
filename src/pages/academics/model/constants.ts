/**
 * Description: Academics module DVA model constants
 */

export const ACADEMICS = {
  NAMESPACE: 'academics',

  EFFECTS: {
    GET_LIST: 'getList',
    GET_DETAILS: 'getDetails',
    EDIT_DETAILS: 'editDetails',
    REMOVE: 'remove',
  },

  ACTIONS: {
    SAVE_LIST: 'saveList',
    SAVE_DETAILS: 'saveDetails',
    CLEAR_LIST: 'clearList',
    CLEAR_DETAILS: 'clearDetails',
    PUT_VALIDATION_ERRORS: 'putValidationErrors',
    CLEAR_VALIDATION_ERRORS: 'clearValidationErrors',
  },

  getNamespace(action: string) {
    return `academics/${action}`;
  },
} as const;