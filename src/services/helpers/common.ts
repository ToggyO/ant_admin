/**
 * Description: Service module helper functions
 */

import { DefaultPaginationValues } from 'enums/DefaultTableQueryParams';

/**
 * Create pagination object for API request
 * @param {{ page: string | number, size: string | number}} queries - parameters
 * @returns {{ page: string | number, pageSize: string | number}}
 */
export const createPaginationQuery = (queries: API.Pagination): API.Pagination => ({
  ...queries,
  page: parseInt(queries.page.toString(), 10) || DefaultPaginationValues.Page,
  pageSize: parseInt(queries.pageSize.toString(), 10) || DefaultPaginationValues.PageSize,
});
