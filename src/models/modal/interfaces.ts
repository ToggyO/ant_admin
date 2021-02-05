/**
 * Description: Modal DVA model interfaces
 */

import type { Reducer } from 'umi';

export interface IModalState {
  modalKeys: string[];
}

export interface IModalReducers {
  openModal: Reducer<IModalState>;
  closeModal: Reducer<IModalState>;
}

export interface IModalModel {
  namespace: 'modal';
  state: IModalState;
  reducers: IModalReducers;
}
