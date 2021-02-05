/**
 * Description: Modal DVA model actions
 */

import { MODAL } from './constants';

const { getNamespace, ACTIONS } = MODAL;

export const openModalActionCreator = (key: string) => ({
  type: getNamespace(ACTIONS.OPEN_MODAL),
  payload: key,
});

export const closeModalActionCreator = (key: string) => ({
  type: getNamespace(ACTIONS.CLOSE_MODAL),
  payload: key,
});
