/**
 * Description: User module API service
 */

import { request } from 'umi';

import { API_ENDPOINTS } from '@/constants';
import type { User } from 'pages/Profile/model/types';

const { PROFILE } = API_ENDPOINTS;

export async function fetchCurrentUser() {
  return request<API.SuccessResponse<User>>(PROFILE.ME);
}
