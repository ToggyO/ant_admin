/**
 * Description: Constants with possible content messages for Antd component `message`
 */

export const ANT_MESSAGE_CONTENT = {
  RESTORE_PASSWORD: {
    SUCCESS: (email: string) => `Special code was send on email ${email}. Please, check your inbox.`,
  },
  CHANGE_PASSWORD: {
    SUCCESS: 'Password has been changed successfully',
    ERROR: 'Invalid password',
  },
} as const;
