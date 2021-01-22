/**
 * Description: Processing sorting field sortOrder in table columns
 */

import { parse } from 'qs';
import type { ColumnsType } from 'antd/lib/table';

export function addSortToTableColumns<T>(columns: ColumnsType<T>[], location: Location) {
    const newColumns = columns.map((column) => ({ ...column }));

    const { search = '' } = location;
    const queries = parse(search, { ignoreQueryPrefix: true });

    const { Order: sortedField = '', Asc: isAsc = '' } = queries;
    const sortColumnIndex = columns.findIndex((column) => sortedField === column['dataIndex']);

    let sortOrder;
    if (isAsc && isAsc === 'true') {
        sortOrder = 'ascend';
    } else if (isAsc && isAsc === 'false') {
        sortOrder = 'descend';
    }

    // eslint-disable-next-line no-bitwise
    if (~sortColumnIndex && isAsc) {
        newColumns[sortColumnIndex]['sortOrder'] = sortOrder;
    }

    newColumns.forEach((column, index) => {
        if (column['children']) {
            newColumns[index]['children'] = addSortToTableColumns(newColumns[index]['children'], location);
        }
    });

    return newColumns;
}
