/**
 * Description: Class described response interceptors
 */
import { autobind } from 'utils/utils';
import { request as umiRequest } from '@@/plugin-request/request';
import type { RequestOptionsInit } from 'umi-request';

import { API_ENDPOINTS, REFRESH_TOKEN } from '@/constants';
import { getFromLocalState } from 'services/storage';
import type { AuthDTO } from 'pages/Auth/model/types';
import { writeTokens } from 'services/auth';
import { HttpStatuses } from 'enums/HttpStatuses';
import { ResponseCodes } from 'enums/ResponseCodes';

let _isAlreadyFetchingToken = false;
let failedQueue: any = [];

const processQueue = (error: any, token: any = null) => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

export class HttpResponseInterceptors {
  constructor() {
    autobind(this);
  }

  public async onAccessTokenRefresh(response: Response, options: RequestOptionsInit): Promise<Response> {
    const clonedResponse: API.BaseResponse = await response.clone().json();
    if (
      response.status === HttpStatuses.UNAUTHORIZED &&
      clonedResponse.code === ResponseCodes.AccessExpired
    ) {
      if (_isAlreadyFetchingToken) {
        return new Promise<Response>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => umiRequest(response.url, options))
          .catch((err) => Promise.reject(err));
      }

      _isAlreadyFetchingToken = true;
      const oldRefreshToken = getFromLocalState(REFRESH_TOKEN);
      if (oldRefreshToken) {
        return new Promise<Response>((resolve, reject) => {
          umiRequest<API.SuccessResponse<AuthDTO>>(API_ENDPOINTS.AUTH.REFRESH_TOKEN, {
            method: 'POST',
            data: { refreshToken: oldRefreshToken },
          })
            .then((res) => {
              const { accessToken, refreshToken } = res.data;
              writeTokens(accessToken, refreshToken);
              processQueue(null, accessToken);
              resolve(
                umiRequest(response.url, {
                  ...options,
                  prefix: '',
                  params: {},
                  headers: { Authorization: `${accessToken}` },
                }),
              );
            })
            .catch((err) => {
              failedQueue = [];
              processQueue(err, null);
              reject(err);
            })
            .then(() => {
              _isAlreadyFetchingToken = false;
            });
        });
      }
    }
    return response;
  }
}

// Expired access
// 6516373a447632410c88a9d2e3d68dd354fe9a64545fb435320df001a61b78ed

// Expired refresh
// 671b3804dfb76238d11639e6a88a24293dc0b112bda4e59a2f7e564a52a8aa33
