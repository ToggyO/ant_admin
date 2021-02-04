declare namespace API {
  // TODO: check
  export type Pagination = {
    page: number;
    pageSize: number;
  };

  export interface BaseResponse {
    code: string;
  }

  export interface SuccessResponse<T extends Record<string, any>> extends BaseResponse {
    data: T;
  }

  export interface ErrorResponse extends BaseResponse {
    message: string;
  }
}
