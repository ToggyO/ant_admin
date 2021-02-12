import React, { useCallback } from 'react';
import { useDispatch } from 'dva';

import { closeModalActionCreator, openModalActionCreator } from 'models/modal/actions';

import type { WithModalProps } from './interfaces';

export function withModal<T extends WithModalProps = any>(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => {
    const dispatch = useDispatch();
    const modalOpen = useCallback((key: string) => dispatch(openModalActionCreator(key)), [dispatch]);
    const modalClose = useCallback((key: string) => dispatch(closeModalActionCreator(key)), [dispatch]);
    return <WrappedComponent {...props} openModal={modalOpen} closeModal={modalClose} />;
  };
}
