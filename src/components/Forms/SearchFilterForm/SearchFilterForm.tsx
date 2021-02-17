import React, { useCallback, useEffect } from 'react';
import { Button, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import type { IExtendedFilterFormProps } from '../../Table/helpers';

import styles from './index.less';

export const SearchFilterForm: React.FC<IExtendedFilterFormProps> = ({
  columnName,
  query,
  clearFilters,
  confirm,
  selectedKeys,
  setSelectedKeys,
}) => {
  const handleReset = useCallback(() => {
    if (clearFilters) {
      clearFilters();
    }
    setSelectedKeys([]);
  }, [setSelectedKeys, clearFilters]);

  useEffect(() => {
    if (query === columnName) {
      setSelectedKeys([query]);
    }
  }, [query, setSelectedKeys, columnName]);

  return (
    <div className={styles.container}>
      <Input
        className={styles.input}
        placeholder={`Search by ${columnName}`}
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => confirm()}
      />
      <Space>
        <Button className={styles.search} type="primary" size="small" onClick={() => confirm()}>
          Search <SearchOutlined />
        </Button>
        <Button className={styles.reset} size="small" onClick={handleReset}>
          Reset
        </Button>
      </Space>
    </div>
  );
};
