/**
 * Description: Service module helper functions
 */

import type { FormInstance } from 'antd/lib/form';

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

/**
 * Function, that transforms errors from backend to  to simple object format
 * that is necessary to AntDesign Form
 * @param {Array<API.ValidationApiError>} errors - error info, comes from backend
 * @param {FormInstance} formInstance - method of form instance
 * @returns {API.FormFieldData[]}
 * - array of objects of transformed errors from backend
 */
export function transformErrorToForm<T extends API.ValidationApiError>(
  errors: T[],
  { getFieldValue, isFieldTouched, isFieldValidating }: FormInstance,
): API.FormFieldData[] {
  return errors.reduce((acc, error) => {
    const value = getFieldValue(error.field);
    const touched = isFieldTouched(error.field);
    const validating = isFieldValidating(error.field);
    const errorObj = {
      name: error.field,
      value,
      touched,
      validating,
      errors: [error.message],
    };
    acc.push(errorObj);
    return acc;
  }, [] as API.FormFieldData[]);
}

/**
 * Function, that creates full image url from base pai store path and resource url
 * @param {string} resourceUrl - url to image resource
 * @returns {string}
 */
export const getImageUrl = (resourceUrl: string): string | null => {
  if (!resourceUrl) {
    return null;
  }
  return `${BASE_API_STORAGE_URL}/${resourceUrl}?${new Date().getTime()}`;
};
