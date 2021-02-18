/**
 * Description: Constants with possible keys for Antd component `message`
 */

export const ANT_MESSAGE_KEYS = {
  LOGIN_ERROR: 'login-error',
  ACCESS_DENIED: 'access-denied',
  USER_EXISTS: 'user-exists',
  RESTORE_PASSWORD: {
    SUCCESS: 'restore-password-success',
  },
  CHANGE_PASSWORD: {
    SUCCESS: 'change-password-success',
    ERROR: 'change-password-error',
  },
  EDIT_USER_PROFILE: {
    SUCCESS: 'edit-user-profile-success',
    INFO: 'profile-changes-info',
  },
} as const;
