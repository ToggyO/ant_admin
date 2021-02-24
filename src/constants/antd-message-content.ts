/**
 * Description: Constants with possible content messages for Antd component `message`
 */

import { humanFileSize } from 'utils/helpers';

export const ANT_MESSAGE_CONTENT = {
  RESTORE_PASSWORD: {
    SUCCESS: (email: string) => `Special code was send on email ${email}. Please, check your inbox.`,
  },
  CHANGE_PASSWORD: {
    SUCCESS: 'Password has been changed successfully',
    ERROR: 'Invalid password',
  },
  EDIT_USER_PROFILE: {
    SUCCESS: 'Updated successfully!',
    INFO: 'Click `Save` button to accept changes',
  },
  FILE: {
    TYPE: 'Invalid file type',
    MAX_SIZE: (maxSize: number) => `File is too large! Max file size: ${humanFileSize(maxSize)}`, // max size in bytes
  },
} as const;
