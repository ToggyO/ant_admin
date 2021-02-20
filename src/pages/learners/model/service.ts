/**
 * Description: Learners module API service
 */

import { request } from 'umi';

import { API_ENDPOINTS } from '@/constants';

import type { Learner } from './types';

const { USERS } = API_ENDPOINTS;

export async function getLearnersListRequest(params = {}) {
  return request<API.SuccessResponse<API.List<Learner>>>(USERS.LIST, { params });
}

export async function getLearnerDetailsRequest(id: number) {
  return request<API.SuccessResponse<{ user: Learner }>>(USERS.DETAILS, {
    method: 'POST',
    data: { targetId: id },
  });
}

export async function removeLearnerRequest(id: number) {
  return request<API.BaseResponse>(USERS.BLOCK, {
    method: 'POST',
    data: { targetId: id },
  });
}
