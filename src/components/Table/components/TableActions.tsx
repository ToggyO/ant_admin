import React from 'react';
import { Button, Dropdown } from 'antd';
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';

import type { ITableActionsProps } from './interfaces';

export const TableActions: React.FC<ITableActionsProps> = ({ overlay }) => (
  <Dropdown overlay={overlay}>
    <Button htmlType="button" shape="round">
      <EllipsisOutlined /> <DownOutlined />
    </Button>
  </Dropdown>
);
