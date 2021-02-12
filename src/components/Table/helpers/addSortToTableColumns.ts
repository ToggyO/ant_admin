/**
 * Description: Processing sorting field sortOrder in table columns
 */

import { parse } from 'qs';
import type { ColumnsType } from 'antd/lib/table';

export function addSortToTableColumns<T>(columns: ColumnsType<T>[], location: Location) {
  const newColumns = columns.map((column) => ({ ...column }));

  const { search = '' } = location;
  const queries = parse(search, { ignoreQueryPrefix: true }) as API.RequestParams;

  const { sort = '' } = queries;
  const sortColumnIndex = columns.findIndex((column) => sort === column['dataIndex']);

  let sortOrder;
  if (sort.startsWith('!')) {
    sortOrder = 'descend';
  } else {
    sortOrder = 'ascend';
  }

  // eslint-disable-next-line no-bitwise
  if (~sortColumnIndex) {
    newColumns[sortColumnIndex]['sortOrder'] = sortOrder;
  }

  newColumns.forEach((column, index) => {
    if (column['children']) {
      newColumns[index]['children'] = addSortToTableColumns(newColumns[index]['children'], location);
    }
  });

  return newColumns;
}
