/**
 * Description: Todos module view
 */

import React  from 'react';
import {  } from 'umi';
import { useSelector, useDispatch } from 'dva';
import { Button, Row, Space } from 'antd';

import type { ConnectState } from 'models/connect';
import { StandardTable } from '@/components';

import type { Todo } from './model/types';
import { TODOS } from './model/constants';
import todosTableColumns from './table-columns';

const { EFFECTS, ACTIONS, getNamespace } = TODOS;

const TodosList = () => {
  const todos = useSelector<ConnectState, Todo[]>(
    (state) => state.todos.todos,
  );
  let loading = useSelector<ConnectState, boolean | undefined>(
    (state) => state.loading.models.todos,
  );

  if (typeof loading === 'undefined') {
    loading = false;
  }

  const dispatch = useDispatch();

  const getTodos = () => dispatch({
    type: getNamespace(EFFECTS.FETCH_TODOS),
  });

  const clearTodos = () => dispatch({
    type: getNamespace(ACTIONS.CLEAR_TODOS),
  });

  const renderExtra = () => (
    <Row>
      <Space>
        <Button
          type="primary"
          htmlType="button"
          onClick={getTodos}
        >
          Get todos
        </Button>
        <Button
          htmlType="button"
          onClick={clearTodos}
        >
          Clear todos
        </Button>
      </Space>
    </Row>
  );

  return (
    <StandardTable<Todo>
      columns={todosTableColumns}
      dataSource={todos}
      rowKey={(record) => record.id}
      loading={loading}
      pagination={{}}
      extraContent={renderExtra()}
    />
  );
}

export default TodosList;
