declare namespace API {
  export type Pagination = {
    page: number;
    pageSize: number;
  };

  export type ApiPagination = Pagination & { total: number };

  export type Sort = {
    sort: string;
  };

  export type Filter = {
    // TODO: check
  };

  export type RequestParams = Pagination & Sort & Filter & Record<string, any>;

  export interface List<T> {
    items: T[];
    pagination: ApiPagination;
  }

  export interface ReloadList<T, P extends Record<string, any> = any> {
    payload: T;
    params: P;
  }

  export type ValidationApiError = {
    field: string;
    message: string;
  };

  export interface BaseResponse {
    code: string;
  }

  export interface SuccessResponse<T extends Record<string, any>> extends BaseResponse {
    data: T;
  }

  export interface ErrorResponse extends BaseResponse {
    message: string;
    errors?: ValidationApiError[];
  }
}
