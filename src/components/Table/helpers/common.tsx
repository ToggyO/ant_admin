/**
 * Description: Common Table component helpers
 */

import React from 'react';
import { Empty } from 'antd';

import { TableSkeleton } from '../components/TableSkeleton';

/**
 * Displaying a skeleton while loading data into a table
 * @param {number} itemsCount - desired number of skeletons
 * @param {Array<any>>} data - data source
 * @param {boolean} loading - loader trigger
 * @return {JSX.Element}
 */
export function renderNoDataContent<T>(itemsCount: number, data: T[], loading: boolean): JSX.Element {
  const array = [...Array(itemsCount)];
  if (loading && data.length === 0) {
    return <TableSkeleton items={array} loading={loading} paragraph={{ rows: 1, width: '100%' }} avatar active />;
  }
  return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
};


