/**
 * Description: Wrapper on ant design Table component
 */

import React from 'react';
import { useHistory } from 'umi';
import { Space, Table } from 'antd';

import { onTableChange } from './helpers';
import { renderNoDataContent } from './helpers';
import type { IStandardTableProps } from './interfaces';

import styles from './index.less';

export function StandardTable<T extends object>({
  dataSource,
  loading,
  pagination,
  rowKey,
  extraContent,
  ...rest
}: IStandardTableProps<T>): JSX.Element {
  const history = useHistory<any>();
  return (
    <Space className={styles.container} direction="vertical" size="middle">
      <div>{extraContent && extraContent}</div>
      <Table<T>
        // FIXME:
        // size={isMobile ? 'small' : 'default'}
        bordered
        className="custom-ant-table"
        rowClassName={() => 'custom-ant-table__rows'}
        rowKey={rowKey}
        locale={{
          emptyText: renderNoDataContent(6, dataSource, loading),
          // FIXME: delete
          // triggerDesc: 'Сортировать по убыванию',
          // triggerAsc: 'Сортировать по возрастанию',
          // cancelSort: 'Сбросить сортировку',
        }}
        dataSource={dataSource}
        pagination={pagination}
        loading={loading}
        onChange={(paginationParams, filters, sorter) =>
          onTableChange(paginationParams, filters, sorter, history)
        }
        {...rest}
      />
    </Space>
  );
}
