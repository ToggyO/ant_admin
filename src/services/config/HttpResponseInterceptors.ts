/**
 * Description: Class described response interceptors
 */

import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

import { autobind } from 'utils/utils';
import { HttpStatuses } from 'enums/HttpStatuses';
import { getFromLocalState } from 'services/storage';
import { API_ENDPOINTS, REFRESH_TOKEN } from '@/constants';
import type { AuthDTO } from 'pages/Auth/model/types';
import { writeTokens } from 'services/auth';
import { HeadersWithAuthHeader } from 'services/config/HttpRequestInterceptors';
import { ResponseCodes } from 'enums/ResponseCodes';

let _isAlreadyFetchingToken = false;
// @ts-ignore
let _isLocalStorageUsed = true;
let _subscribers: any[] = [];

function onAccessTokenFetched(accessToken: string) {
  _subscribers = _subscribers.filter((callback: FunctionType) => callback(accessToken));
}

function addSubscriber(callback: FunctionType) {
  _subscribers.push(callback);
}

export class HttpResponseInterceptors {
  constructor() {
    autobind(this);
    // FIXME: delete
    console.log('HttpResponseInterceptors is created');
  }

  public async catchAccessTokenExpiration(
    response: Response,
    options: RequestOptionsInit,
  ): Promise<Response> {
    // console.log(response);
    // console.log(options);
    const clonedResponsePayload: API.BaseResponse = await response.clone().json();
    const originalRequest = options;

    if (
      response.status === HttpStatuses.UNAUTHORIZED &&
      clonedResponsePayload.code === ResponseCodes.AccessExpired
    ) {
      if (!_isAlreadyFetchingToken) {
        _isAlreadyFetchingToken = true;

        if (sessionStorage) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          _isLocalStorageUsed = false;
        }

        const oldRefreshToken = getFromLocalState(REFRESH_TOKEN);
        const { data } = await request<API.SuccessResponse<AuthDTO>>(API_ENDPOINTS.AUTH.REFRESH_TOKEN, {
          method: 'POST',
          data: { refreshToken: oldRefreshToken },
        });
        const { accessToken, refreshToken } = data;
        writeTokens(accessToken, refreshToken);
        _isAlreadyFetchingToken = false;
        onAccessTokenFetched(accessToken);
      }

      // const retryOriginalRequest = new Promise((resolve) => {
      //   addSubscriber((accessToken: string) => {
      //     (originalRequest.headers as HeadersWithAuthHeader).Authorization = `Bearer ${accessToken}`;
      //     resolve(request(response.url, originalRequest));
      //   });
      // });
      addSubscriber(async (accessToken: string) => {
        (originalRequest.headers as HeadersWithAuthHeader).Authorization = `Bearer ${accessToken}`;
        await request(response.url, originalRequest);
      });
    }
    return response;
  }
}

// Expired access
// 6516373a447632410c88a9d2e3d68dd354fe9a64545fb435320df001a61b78ed

// Expired refresh
// 671b3804dfb76238d11639e6a88a24293dc0b112bda4e59a2f7e564a52a8aa33
