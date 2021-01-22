/**
 * Description: Todos module table columns
 */

import { Badge } from 'antd';
import type { ColumnsType } from 'antd/lib/table';

import type { Todo } from './model/types';

const columns: ColumnsType<Todo> = [
  {
    key: 'title',
    title: 'Todo',
    dataIndex: 'title',
  },
  {
    key: 'id',
    title: 'Todo Id',
    dataIndex: 'id',
  },
  {
    key: 'userId',
    title: 'Assigned to',
    dataIndex: 'userId',
  },
  {
    key: 'completed',
    title: 'Status',
    dataIndex: 'completed',
    render: (value: boolean, record) => {
      const status = value ? 'success' : 'default';
      const text = value ? 'Completed' : 'In Progress';
      return <Badge key={record.id} status={status} text={text} />
    }
  },
];

export default columns;
