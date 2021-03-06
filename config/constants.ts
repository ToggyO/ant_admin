/**
 * Descriptions: Routes constants
 */

export const APP_NAME = 'AccAudio';

export const ROUTES = {
  AUTH: {
    ROOT: '/auth',
    SIGN_IN: '/auth/sign-in',
    RESTORE_PASSWORD: '/auth/restore-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  PROFILE: {
    ROOT: '/profile',
  },
  ACADEMICS: {
    ROOT: '/academics',
    DETAILS: (id: string | number) => `/academics/${id}`,
    CREATE: '/academics/create',
  },
  LEARNERS: {
    ROOT: '/learners',
    DETAILS: (id: string | number) => `/learners/${id}`,
    CREATE: '/learners/create',
  },
};
