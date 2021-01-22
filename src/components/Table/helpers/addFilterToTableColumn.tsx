/**
 * Description: Add a filter to a specific table column
 */

import React from 'react';
import { parse } from 'qs';
import type { FilterDropdownProps } from 'antd/lib/table/interface';

export const addFilterToTableColumn = (Component: typeof React.Component, location: Location, columnName: string) => {
    const queries = parse(location.search, { ignoreQueryPrefix: true });
    return {
        filterDropdown: (props: FilterDropdownProps) => <Component query={queries[columnName]} {...props} />,
        // TODO: возможные реализации
        // filterIcon: (filtered) => (
        //         <FilterFilled type="search" style={{ fontSize: '17px', color: filtered ? '#1890ff' : undefined }}/>
        // );
        // onFilterDropdownVisibleChange: (visible) => {
        //     if (visible) {
        //         setTimeout(() => console.log(visible));
        //     }
        // },
    };
};
