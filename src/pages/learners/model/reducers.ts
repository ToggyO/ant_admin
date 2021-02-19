/**
 * Description: Learners module DVA model reducers
 */

import { createAntPagination } from 'utils/helpers';
import { CommonReducers } from 'models/common.reducers';

import type { ILearnersReducers, ILearnersState } from './interfaces';
import type { Learner } from './types';

export default {
  saveList(state, { payload }) {
    const { items, pagination } = payload as API.List<Learner>;
    return {
      ...state,
      list: items,
      pagination: createAntPagination(pagination),
    };
  },

  saveDetails(state, { payload }) {
    const details = payload as Learner;
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
      details: {} as Learner,
    };
  },

  ...new CommonReducers<ILearnersState>(),
} as ILearnersReducers;
