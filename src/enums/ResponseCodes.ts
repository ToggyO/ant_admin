/**
 * Description: Enums - response codes
 */

export enum ResponseCodes {
  Success = 'success',
  Created = 'created',
  RefreshExpired = 'refresh_expired',
  AccessExpired = 'access_expired',
  InvalidCredentials = 'invalid_credentials',
  Unauthorized = 'unauthorized',
  BadRequest = 'bad_request',
  NotFound = 'not_found',
  PermissionDenied = 'permission_denied',
  InternalServerError = 'internal_server_error',
}
