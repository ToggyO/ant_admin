/**
 * Description: Modal DVA model reducers
 */

import type { IModalReducers } from './interfaces';

export default {
  openModal(state, { payload }) {
    const modalKey = payload as string;
    if (state?.modalKeys.includes(modalKey)) {
      return state;
    }
    return {
      ...state,
      modalKeys: [...state!.modalKeys, modalKey],
    };
  },

  closeModal(state, { payload }) {
    const modalKey = payload as string;
    const newModalKeys = state!.modalKeys.filter((key) => key !== modalKey);
    return {
      ...state,
      modalKeys: newModalKeys,
    };
  },
} as IModalReducers;
