/**
 * Description: Academics module API service
 */

import { request } from 'umi';

import { API_ENDPOINTS } from '@/constants';

import type { Academic, CreateAcademicDTO } from './types';

const { USERS } = API_ENDPOINTS;

export async function getAcademicsListRequest(params = {}): Promise<API.SuccessResponse<API.List<Academic>>> {
  return request<API.SuccessResponse<API.List<Academic>>>(USERS.LIST, {
    params,
  });
}

export async function getAcademicDetailsRequest(
  id: number,
): Promise<API.SuccessResponse<{ user: Academic }>> {
  return request<API.SuccessResponse<{ user: Academic }>>(USERS.DETAILS, {
    method: 'POST',
    data: { targetId: id },
  });
}

export async function createAcademicRequest(
  dto: CreateAcademicDTO,
): Promise<API.SuccessResponse<{ user: Academic }>> {
  return request<API.SuccessResponse<{ user: Academic }>>(USERS.CREATE, {
    method: 'POST',
    data: dto,
  });
}
