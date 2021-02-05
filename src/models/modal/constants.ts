/**
 * Description: Modal DVA model constants
 */

export const MODAL = {
  NAMESPACE: 'modal',

  ACTIONS: {
    OPEN_MODAL: 'openModal',
    CLOSE_MODAL: 'closeModal',
  },

  getNamespace(action: string) {
    return `modal/${action}`;
  },
} as const;
