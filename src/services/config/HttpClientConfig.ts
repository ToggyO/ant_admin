/**
 * Description: UmiJs request plugin options
 */

import type { RequestConfig } from 'umi';
import type { RequestInterceptor, ResponseError, ResponseInterceptor } from 'umi-request';
import { notification } from 'antd';

import { HttpStatuses } from 'enums/HttpStatuses';
import { autobind } from 'utils/utils';

import { HttpRequestInterceptors } from './HttpRequestInterceptors';
import { HttpResponseInterceptors } from './HttpResponseInterceptors';

export class HttpClientConfig implements RequestConfig {
  /**
   * API base url
   */
  public readonly prefix = BASE_API_URL;
  /**
   * Array of interceptors for request
   */
  public readonly requestInterceptors: RequestInterceptor[] = Object.values(new HttpRequestInterceptors());
  /**
   * Array of interceptors for response
   */
  public readonly responseInterceptors: ResponseInterceptor[] = Object.values(new HttpResponseInterceptors());
  /**
   * Exception handler
   */
  public readonly errorHandler = async (error: ResponseError): Promise<void> => {
    const { response } = error;
    if (!response || response.status === HttpStatuses.INTERNAL_SERVER_ERROR) {
      notification.error({
        description: 'internal_server_error',
        message: 'Unknown error. Please, try again later',
      });
    }
    throw error;
  };

  constructor() {
    autobind(this);
  }
}
