/**
 * Description: Academics module DVA model reducers
 */

import { CommonReducers } from 'models/common-reducers';

import type { IAcademicsReducers, IAcademicsState } from './interfaces';

export default {
  saveList(state) {
    return {
      ...state,
    };
  },

  saveDetails(state) {
    return {
      ...state,
    };
  },

  clearList(state) {
    return {
      ...state,
    };
  },

  clearDetails(state) {
    return {
      ...state,
    };
  },

  ...new CommonReducers<IAcademicsState>(),
} as IAcademicsReducers;
