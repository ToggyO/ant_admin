/**
 * Description: Common application helper functions
 */

/**
 * Function for pushing elements of an array consisting of numeric values
 */
export const arraySum = (arr: number[]): number => {
  let sum;
  if (arr.length) {
    sum = arr
      .reduce((acc, curr) =>
        (parseFloat(acc.toString()) || 0) + (parseFloat(curr.toString()) || 0));
  } else {
    sum = 0;
  }
  return sum;
};

