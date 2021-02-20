import React from 'react';
import { Dispatch, Link } from 'umi';
import { Menu, Modal } from 'antd';
import { FileSearchOutlined, UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons';

import { BLOCK_TEXT } from '@/constants';
import { ROUTES } from 'config/constants';
import { UserRoles } from 'enums/UserRoles';
import type { ActionCreator } from 'models/connect';

import type { Academic } from '../model/types';

export const academicsActionsMenu = (
  dispatch: Dispatch,
  record: Academic,
  queries: API.RequestParams,
  blockActionCreator: ActionCreator<{ id: number; params: API.RequestParams }>,
) => (
  <Menu>
    <Menu.Item key="details">
      <Link to={ROUTES.ACADEMICS.DETAILS(record.id)}>
        <FileSearchOutlined /> Details
      </Link>
    </Menu.Item>
    <Menu.Item
      key="block"
      onClick={() =>
        Modal.confirm({
          title: BLOCK_TEXT.TITLE(record.name),
          content: BLOCK_TEXT.CONTENT,
          okText: BLOCK_TEXT.OK_TEXT,
          onOk: () => dispatch(blockActionCreator(record.id, { ...queries, role: UserRoles.Academic })),
        })
      }
    >
      {record.deleted ? <UserAddOutlined /> : <UserDeleteOutlined />}
      {record.deleted ? 'Unblock' : 'Block'}
    </Menu.Item>
  </Menu>
);
