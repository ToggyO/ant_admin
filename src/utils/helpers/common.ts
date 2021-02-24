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

/**
 * Transform file size from bytes to readable units
 */
export type HumanFileSizeConfig = {
  si?: boolean;
  dp?: number;
  withUnits?: boolean;
};

export function humanFileSize(bytes: number, config: HumanFileSizeConfig = {}) {
  const { si = false, dp = 1, withUnits = true } = config;
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return `${bytes} B`;
  }

  const units = ['kb', 'MB', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

  let result = bytes.toFixed(dp);

  if (withUnits) {
    result += ` ${units[u]}`;
  }

  return result;
}
