/**
 * Description: Todos module api
 */

import { request } from 'umi';

import { API_ENDPOINTS } from '@/constants';

import type { Todo } from 'pages/Todos/model/types';

const { TODOS } = API_ENDPOINTS;

export async function getTodos() {
  return request<Todo[]>(TODOS.GET_TODOS);
}
