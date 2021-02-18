/**
 * Description: Class described request interceptors
 */

import type { RequestOptionsInit } from 'umi-request';

import { ACCESS_TOKEN } from '@/constants';
import { getFromLocalState } from 'services/storage';
import { autobind } from 'utils/utils';

export type HeadersWithAuthHeader = HeadersInit & {
  Authorization?: string;
};

export class HttpRequestInterceptors {
  constructor() {
    autobind(this);
  }

  public setHeaders(url: string, options: RequestOptionsInit) {
    const accessToken = getFromLocalState(ACCESS_TOKEN);

    const headers: HeadersWithAuthHeader = {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
    };

    const requestHeaders = options.headers as HeadersWithAuthHeader;
    if (accessToken) {
      // Uncomment for `Bearer` token
      // headers.Authorization = requestHeaders.Authorization || `Bearer ${accessToken}`;
      headers.Authorization = `${accessToken}`;
    }

    options.headers = {
      ...headers,
      ...requestHeaders,
    };

    return {
      url,
      options,
    };
  }
}
