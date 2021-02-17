/**
 * Description: Add a filter to a specific table column
 */

import type { History, Location } from 'history';

import React from 'react';
import { parse } from 'qs';
import type { FilterDropdownProps } from 'antd/lib/table/interface';
import type { ColumnType } from 'antd/lib/table';
import { FilterFilled } from '@ant-design/icons';

import type { IExtendedFilterFormProps } from './interfaces';

export function addFilterToTableColumn<T>(
  Component: React.ComponentType<IExtendedFilterFormProps>,
  location: Location<History.LocationState>,
  columnName: string,
  FilterIcon?: React.ComponentType,
): ColumnType<T> {
  const queries = parse(location.search, { ignoreQueryPrefix: true });
  return {
    filterDropdown: (props: FilterDropdownProps) => (
      <Component columnName={columnName} query={queries[columnName] as string} {...props} />
    ),
    filterIcon: () => (FilterIcon ? <FilterIcon /> : <FilterFilled />),
    // @ts-ignore
    filteredValue: queries[columnName],
  };
}
