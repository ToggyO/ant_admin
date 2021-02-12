import React from 'react';
import { Dispatch, Link } from 'umi';
import { Button, Tag, Modal } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { CheckCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import { REMOVE_TEXT } from '@/constants';
import { ROUTES } from 'config/constants';

import type { Academic } from '../model/types';
import { removeAcademicActionCreator } from '../model/actions';

export const getColumns = (dispatch: Dispatch): ColumnsType<Academic> => [
  {
    key: 'id',
    title: 'User Id',
    dataIndex: 'id',
    width: '5%',
  },
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'fullName',
    width: '15%',
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    width: '15%',
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
    width: '5%',
    render: (_, record) => (
      <div>
        <Link to={ROUTES.ACADEMICS.DETAILS(record.id)}>Details</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;|
        <Button
          type="link"
          htmlType="button"
          onClick={() =>
            Modal.confirm({
              title: REMOVE_TEXT.TITLE(record.name),
              content: REMOVE_TEXT.CONTENT,
              okText: REMOVE_TEXT.OK_TEXT,
              onOk: () => dispatch(removeAcademicActionCreator(record.id)),
              // dispatch({
              //   type: 'equipment/deleteEquipment',
              //   payload: record.id,
              //   params: {
              //     page: definePageNumber(equipmentList, queries, history),
              //     page: queries.pageSize,
              //     pageSize: queries.pageSize,
              //   },
              // }
            })
          }
        >
          Delete
        </Button>
      </div>
    ),
  },
];
