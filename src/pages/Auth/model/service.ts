/**
 * Description: Auth module API service
 */

import { request } from 'umi';

import { API_ENDPOINTS } from '@/constants';

import type { AuthCredentialsDTO } from '../types';

import type { AuthDTO } from './types';

const { AUTH } = API_ENDPOINTS;

export async function signIn(params: AuthCredentialsDTO) {
  return request<API.SuccessResponse<AuthDTO>>(AUTH.SIGN_IN, {
    method: 'POST',
    data: params,
  });
}

export async function signOut() {
  return request<API.BaseResponse>(AUTH.SING_OUT, {
    method: 'POST',
  });
}
