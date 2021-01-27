declare namespace API {
  // TODO: check
  export type Pagination = {
    page: number;
    pageSize: number;
  };

  export interface Response {
    status: string;
    code: number;
  }

  export type SuccessResponse<T extends Record<string, any>> = Response & T;

  export interface ErrorResponse extends Response {
    message: string;
  }
}
