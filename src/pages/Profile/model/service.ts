/**
 * Description: Profile module API service
 */

import { request } from 'umi';

import { API_ENDPOINTS } from '@/constants';

import type { ChangePasswordDTO } from '../types';

const { PROFILE } = API_ENDPOINTS;

export function changePasswordRequest(data: ChangePasswordDTO) {
  return request(PROFILE.CHANGE_PASSWORD, {
    method: 'POST',
    data,
  });
}
