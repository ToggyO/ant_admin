/**
 * Description: Common application helper functions
 */

import { DefaultPaginationValues } from 'enums/DefaultTableQueryParams';

/**
 * Function for pushing elements of an array consisting of numeric values
 */
export const arraySum = (arr: number[]): number => {
  let sum;
  if (arr.length) {
    sum = arr.reduce((acc, curr) => (parseFloat(acc.toString()) || 0) + (parseFloat(curr.toString()) || 0));
  } else {
    sum = 0;
  }
  return sum;
};

/**
 * Get full name
 */
export type GetFullName = { firstName: string; lastName: string };

export const getFullName = ({ firstName = '', lastName = '' }: GetFullName): string => {
  const name = firstName || '';
  const surname = lastName || '';
  return `${name} ${surname}`;
};

/**
 * Format pagination from API to ant design table pagination
 */
export type AntPagination = { current: number; pageSize: number; total: number };

export function createAntPagination(apiPagination: API.ApiPagination): AntPagination {
  const { page, pageSize, total } = apiPagination;
  const resultPage = page ? parseInt(apiPagination.page.toString(), 10) : DefaultPaginationValues.Page;
  const resultPageSize = pageSize
    ? parseInt(apiPagination.pageSize.toString(), 10)
    : DefaultPaginationValues.PageSize;
  return {
    current: resultPage,
    pageSize: resultPageSize,
    total,
  };
}

/**
 * Create instance of FormData from simple object
 */
export function createFormDataDto<T extends Record<string, any>>(dto: T): FormData {
  const fd = new FormData();
  Object.entries(dto).forEach(([key, val]): void => {
    if (!val) {
      return;
    }
    if (val instanceof File) {
      fd.append(key, val, val.name);
    } else {
      fd.append(key, val);
    }
  });
  return fd;
}
