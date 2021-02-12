/**
 * Description: Constants with text to confirm modal object deletion
 */

export const REMOVE_TEXT = {
  TITLE: (text: string | number) => `Are you sure you want to remove ${text}?`,
  CONTENT: 'Click delete to remove.',
  OK_TEXT: 'Remove',
} as const;
