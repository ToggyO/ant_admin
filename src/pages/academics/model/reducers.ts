/**
 * Description: Academics module DVA model reducers
 */

import { createAntPagination } from 'utils/helpers';
import { CommonReducers } from 'models/common.reducers';

import type { IAcademicsReducers, IAcademicsState } from './interfaces';
import type { Academic } from './types';

export default {
  saveList(state, { payload }) {
    const { items, pagination } = payload as API.List<Academic>;
    return {
      ...state,
      list: items,
      pagination: createAntPagination(pagination),
    };
  },

  savePapers(state, { payload }) {
    const papers = payload;
    return {
      ...state,
      papers,
    };
  },

  saveDetails(state, { payload }) {
    const details = payload as Academic;
    return {
      ...state,
      details,
    };
  },

  clearList(state) {
    return {
      ...state,
      list: [],
    };
  },

  clearDetails(state) {
    return {
      ...state,
      details: {} as Academic,
    };
  },

  ...new CommonReducers<IAcademicsState>(),
} as IAcademicsReducers;
