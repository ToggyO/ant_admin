/**
 * Description: Constants with possible urls of API endpoints
 */

export const API_ENDPOINTS = {
  TODOS: {
    GET_TODOS: 'https://jsonplaceholder.typicode.com/todos',
  },
  AUTH: {
    SIGN_IN: '/sign.in',
    SING_OUT: '/sign.out',
    REFRESH_TOKEN: '/refresh-tokens',
  },
  PROFILE: {
    ME: '/self',
  },
  USERS: {
    LIST: '/users.list',
    DETAILS: '/users.details',
    CREATE: '/users.create',
    UPDATE: '/users.update',
    DELETE: '/users.delete',
  },
} as const;
