/**
 * Description: Common application helper functions
 */

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
  return {
    current: apiPagination.page,
    pageSize: apiPagination.pageSize,
    total: apiPagination.total,
  };
}
