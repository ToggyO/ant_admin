import React from 'react';
import { Dispatch, Link } from 'umi';
import { Menu, Modal } from 'antd';
import { DeleteOutlined, FileSearchOutlined } from '@ant-design/icons';

import { REMOVE_TEXT } from '@/constants';
import { ROUTES } from 'config/constants';
import { UserRoles } from 'enums/UserRoles';
import type { ActionCreator } from 'models/connect';

import type { Academic } from '../model/types';

export const academicsActionsMenu = (
  dispatch: Dispatch,
  record: Academic,
  queries: API.RequestParams,
  removeActionCreator: ActionCreator<{ id: number; params: API.RequestParams }>,
) => (
  <Menu>
    <Menu.Item key="details">
      <Link to={ROUTES.ACADEMICS.DETAILS(record.id)}>
        <FileSearchOutlined /> Details
      </Link>
    </Menu.Item>
    <Menu.Item
      key="delete"
      onClick={() =>
        Modal.confirm({
          title: REMOVE_TEXT.TITLE(record.name),
          content: REMOVE_TEXT.CONTENT,
          okText: REMOVE_TEXT.OK_TEXT,
          onOk: () => dispatch(removeActionCreator(record.id, { ...queries, role: UserRoles.Academic })),
        })
      }
    >
      <DeleteOutlined /> Delete
    </Menu.Item>
  </Menu>
);
