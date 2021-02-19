import React from 'react';
import { Dispatch, history } from 'umi';
import { Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { CheckCircleOutlined, MinusCircleOutlined, SearchOutlined } from '@ant-design/icons';

import { addFilterToTableColumn, SearchFilterForm, TableActions } from 'components';

import { removeLearnerActionCreator } from '../model/actions';
import type { Learner } from '../model/types';

import { learnersActionsMenu } from './learners.actions';

export const getColumns = (dispatch: Dispatch, queries: API.RequestParams): ColumnsType<Learner> => [
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
    key: 'trial',
    title: 'Trial started',
    dataIndex: 'trialStarted',
    width: '10%',
    render: (value: boolean) => {
      const icon = value ? <CheckCircleOutlined /> : <MinusCircleOutlined />;
      const text = value ? 'Started' : 'No trial';
      return <Tag icon={icon}>{text}</Tag>;
    },
  },
  {
    key: 'actions',
    title: 'Actions',
    width: '1%',
    render: (_, record) => (
      <TableActions overlay={learnersActionsMenu(dispatch, record, queries, removeLearnerActionCreator)} />
    ),
  },
];
