/**
 * Description: Table component interfaces
 */

import type React from 'react';
import type { TablePaginationConfig } from 'antd/lib/table';
import type { GetRowKey } from 'antd/lib/table/interface';

export interface IStandardTableProps<T> {
  dataSource: T[];
  loading: boolean;
  pagination: Partial<TablePaginationConfig>;
  rowKey: string | GetRowKey<T>;
  extraContent?: React.ReactNode;
  [propName: string]: any;
}

// TODO: check
export interface ITableParams {
  page?: number;
  pageSize?: number;
  sort?: string;
  filter?: string;
}
