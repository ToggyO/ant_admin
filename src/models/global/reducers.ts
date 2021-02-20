/**
 * Description: Global DVA model reducers
 */

import type { Country } from 'models/global/types';

import type { IGlobalReducers } from './interfaces';

export default {
  saveCountriesList(state, { payload }) {
    const countries = payload as Country[];
    return { ...state, countries };
  },
} as IGlobalReducers;
