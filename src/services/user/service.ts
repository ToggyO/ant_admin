/**
 * Description: User module API service
 */

import { request } from 'umi';

import { API_ENDPOINTS } from '@/constants';
import type { User } from 'pages/Profile/model/types';

import type { UploadAvatarDTO } from './types';

const { PROFILE, USERS } = API_ENDPOINTS;

export async function fetchCurrentUser() {
  return request<API.SuccessResponse<{ user: User }>>(PROFILE.ME);
}

export async function editUserRequest<T>(data: T) {
  return request<API.BaseResponse>(USERS.UPDATE, {
    method: 'POST',
    data,
  });
}

export async function uploadAvatarRequest(dto: UploadAvatarDTO) {
  return request<API.BaseResponse>(USERS.UPLOAD_AVATAR, {
    method: 'POST',
    data: dto,
  });
}

export async function changeEmailRequest<T>(data: T) {
  return request<API.BaseResponse>(USERS.UPDATE_EMAIL, {
    method: 'POST',
    data,
  });
}
