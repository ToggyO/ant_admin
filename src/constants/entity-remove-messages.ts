/**
 * Description: Constants with text to confirm modal object deletion
 */

export const BLOCK_TEXT = {
  TITLE: (text: string | number) => `Are you sure you want to block ${text}?`,
  CONTENT: 'Click `Ok` to remove.',
  OK_TEXT: 'Ok',
} as const;
