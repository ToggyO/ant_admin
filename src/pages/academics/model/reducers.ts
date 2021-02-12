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
    };
  },

  ...new CommonReducers<IAcademicsState>(),
} as IAcademicsReducers;
