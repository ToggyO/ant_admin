/**
 * Description: Todos module api
 */

import { extend } from 'umi-request';

import { API_ENDPOINTS } from '@/constants';

const { TODOS } = API_ENDPOINTS;

export async function getTodos() {
  return extend({}).get(TODOS.GET_TODOS);
}
