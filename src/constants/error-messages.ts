/**
 * Description: Constants with possible error messages
 */

export const ERROR_MESSAGES = {
  LOGIN: {
    REQUIRED: 'Login is required',
    INVALID_CREDENTIALS: "User doesn't exist or password is wrong!",
  },
  EMAIL: {
    REQUIRED: 'Email is required',
    INVALID: 'Invalid email',
  },
  PASSWORD: {
    COMMON: {
      REQUIRED: 'Password is required',
      LENGTH: 'Password should include min 6 max 30 characters',
      INVALID_CONTENT: 'Password should include only digits, latin letters or special characters',
    },
    OLD: {
      REQUIRED: 'Old password is required',
      SHOULD_MATCH: 'Old passwords should not match with new password',
    },
    CONFIRM: {
      REQUIRED: 'Password confirmation is required',
      SHOULD_MATCH: 'Passwords do not match',
    },
  },
} as const;
