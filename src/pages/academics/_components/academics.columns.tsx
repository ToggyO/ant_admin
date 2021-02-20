import React from 'react';
import { Dispatch, history } from 'umi';
import { Badge } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { SearchOutlined } from '@ant-design/icons';

import { addFilterToTableColumn, SearchFilterForm, TableActions } from 'components';
import { UserStatuses } from 'enums/UserStatuses';
import { BadgeStatuses } from 'enums/antd.enums';

import type { Academic } from '../model/types';
import { blockAcademicActionCreator } from '../model/actions';

import { academicsActionsMenu } from './academics.actions';

export const getColumns = (dispatch: Dispatch, queries: API.RequestParams): ColumnsType<Academic> => [
  {
    key: 'id',
    title: 'User Id',
    dataIndex: 'id',
    width: '5%',
  },
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    width: '10%',
    ...addFilterToTableColumn(SearchFilterForm, history.location, 'name', SearchOutlined),
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    width: '10%',
  },
  {
    key: 'country',
    title: 'Country',
    dataIndex: 'country',
    width: '10%',
  },
  {
    key: 'university',
    title: 'University',
    dataIndex: 'university',
    width: '10%',
  },
  {
    key: 'deleted',
    title: 'Status',
    dataIndex: 'deleted',
    width: '1%',
    render: (value: boolean) => {
      const status = value ? BadgeStatuses.Error : BadgeStatuses.Processing;
      const text = value ? UserStatuses.Blocked : UserStatuses.Active;
      return <Badge status={status} text={text} />;
    },
  },
  {
    key: 'actions',
    title: 'Actions',
    width: '1%',
    render: (_, record) => (
      <TableActions overlay={academicsActionsMenu(dispatch, record, queries, blockAcademicActionCreator)} />
    ),
  },
];
