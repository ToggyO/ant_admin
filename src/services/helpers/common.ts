/**
 * Description: Service module helper functions
 */

import { DefaultPaginationValues } from 'enums/DefaultTableQueryParams';

/**
 * Create pagination object for API request
 * @param {{ page: string | number, size: string | number}} queries - parameters
 * @returns {{ page: string | number, pageSize: string | number}}
 */
export const createPaginationQuery = (queries: API.RequestParams): API.RequestParams => ({
  ...queries,
  page: queries.page || DefaultPaginationValues.Page,
  pageSize: queries.pageSize || DefaultPaginationValues.PageSize,
});
