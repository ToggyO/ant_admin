/**
 * Description: Academics module DVA model constants
 */

export const ACADEMICS = {
  NAMESPACE: 'academics',

  EFFECTS: {
    GET_LIST: 'getList',
    GET_DETAILS: 'getDetails',
    GET_PAPERS: 'getPapers',
    EDIT_DETAILS: 'editDetails',
    CREATE: 'create',
    BLOCK: 'block',
  },

  ACTIONS: {
    SAVE_LIST: 'saveList',
    SAVE_DETAILS: 'saveDetails',
    SAVE_PAPERS: 'savePapers',
    CLEAR_LIST: 'clearList',
    CLEAR_DETAILS: 'clearDetails',
    PUT_GLOBAL_ERROR: 'putGlobalError',
    CLEAR_GLOBAL_ERROR: 'clearGlobalError',
    PUT_VALIDATION_ERRORS: 'putValidationErrors',
    CLEAR_VALIDATION_ERRORS: 'clearValidationErrors',
  },

  getNamespace(action: string) {
    return `academics/${action}`;
  },
} as const;
