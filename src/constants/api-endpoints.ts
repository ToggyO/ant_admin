/**
 * Description: Constants with possible urls of API endpoints
 */

export const API_ENDPOINTS = {
  TODOS: {
    GET_TODOS: 'https://jsonplaceholder.typicode.com/todos',
  },
  AUTH: {
    SIGN_IN: '/sing.in',
    SING_OUT: '/sign.out',
  },
} as const;
