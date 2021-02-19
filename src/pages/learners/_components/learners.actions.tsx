import React from 'react';
import { Menu, Modal } from 'antd';
import { Dispatch, Link } from 'umi';
import {
  DeleteOutlined,
  FileSearchOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';

import { REMOVE_TEXT } from '@/constants';
import { ROUTES } from 'config/constants';
import { UserRoles } from 'enums/UserRoles';
import type { ActionCreator } from 'models/connect';

import type { Learner } from '../model/types';

export const learnersActionsMenu = (
  dispatch: Dispatch,
  record: Learner,
  queries: API.RequestParams,
  removeActionCreator: ActionCreator<{ id: number; params: API.RequestParams }>,
) => (
  <Menu>
    <Menu.Item key="details">
      <Link to={ROUTES.LEARNERS.DETAILS(record.id)}>
        <FileSearchOutlined /> Details
      </Link>
    </Menu.Item>
    <Menu.Item key="block">
      <UsergroupDeleteOutlined /> <UsergroupAddOutlined /> Block/Unblock
    </Menu.Item>
    <Menu.Item
      key="delete"
      onClick={() =>
        Modal.confirm({
          title: REMOVE_TEXT.TITLE(record.name),
          content: REMOVE_TEXT.CONTENT,
          okText: REMOVE_TEXT.OK_TEXT,
          onOk: () => dispatch(removeActionCreator(record.id, { ...queries, role: UserRoles.Learner })),
        })
      }
    >
      <DeleteOutlined /> Delete
    </Menu.Item>
  </Menu>
);
