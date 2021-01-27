/**
 * Description: UmiJs request plugin options
 */

import type { RequestConfig } from 'umi';
import type { RequestInterceptor, ResponseError, ResponseInterceptor } from 'umi-request';
import { notification } from 'antd';

import { CODE_MESSAGES } from './constants';
import { HttpRequestInterceptors } from './HttpRequestInterceptors';
import { HttpResponseInterceptors } from './HttpResponseInterceptors';

export class HttpClientConfig implements RequestConfig {
  /**
   * API base url
   */
  public prefix = BASE_API_URL;
  /**
   * Array of interceptors for request
   */
  public requestInterceptors: RequestInterceptor[] = Object.values(new HttpRequestInterceptors());
  /**
   * Array of interceptors for response
   */
  public responseInterceptors: ResponseInterceptor[] = Object.values(new HttpResponseInterceptors());
  /**
   * Exception handler
   */
  public errorHandler = this._getErrorHandler;

  // TODO: допилить при соединении с бэком
  private _getErrorHandler(error: ResponseError): void {
    const { response } = error;
    if (response && response.status) {
      const errorText = CODE_MESSAGES[response.status] || response.statusText;
      const { status, url } = response;
      // TODO: вынести в конфиг сообщения
      notification.error({
        message: `Request error ${status}: ${url}`,
        description: errorText,
      });
    }

    if (!response) {
      notification.error({
        description: 'internal_server_error',
        message: 'Unknown error. Please, try again later',
      });
    }
    throw error;
  }
}
