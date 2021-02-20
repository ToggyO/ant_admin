/**
 * Description: Countries module API selectors
 */

import { request } from 'umi';

import { API_ENDPOINTS } from '@/constants';

import type { Country } from 'models/global/types';

const { COUNTRIES } = API_ENDPOINTS;

export async function getCountriesList() {
  return request<API.SuccessResponse<API.List<Country>>>(COUNTRIES.LIST);
}
