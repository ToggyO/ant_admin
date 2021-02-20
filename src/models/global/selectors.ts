/**
 * Description: Global DVA model selectors
 */

import { createSelector } from 'reselect';

import type { SelectOptions } from 'components';
import type { ConnectState } from 'models/connect';

import type { Country } from './types';

export const countriesListSelector = createSelector<ConnectState, Country[], SelectOptions[]>(
  (state) => state.global.countries,
  (countries) =>
    countries.map((country) => ({
      value: country.id,
      label: country.name,
    })),
);
