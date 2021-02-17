/**
 * Description: Auth module API service
 */

import { request } from 'umi';

import { API_ENDPOINTS } from '@/constants';

import type { AuthCredentialsDTO, ResetPasswordDTO, RestorePasswordDTO } from '../types';

import type { AuthDTO } from './types';

const { AUTH } = API_ENDPOINTS;

export async function signInRequest(params: AuthCredentialsDTO) {
  return request<API.SuccessResponse<AuthDTO>>(AUTH.SIGN_IN, {
    method: 'POST',
    data: params,
  });
}

export async function signOutRequest() {
  return request<API.BaseResponse>(AUTH.SING_OUT, {
    method: 'POST',
  });
}

export function restorePasswordRequest(data: RestorePasswordDTO) {
  return request<API.BaseResponse>(AUTH.RESTORE_PASSWORD, {
    method: 'POST',
    data,
  });
}

export function resetPasswordRequest(data: ResetPasswordDTO) {
  return request<API.BaseResponse>(AUTH.RESET_PASSWORD, {
    method: 'POST',
    data,
  });
}
