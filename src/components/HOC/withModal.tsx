import React, { useCallback } from 'react';
import { useDispatch } from 'dva';

import { closeModalActionCreator, openModalActionCreator } from 'models/modal/actions';

export function withModal<T = any>(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => {
    const dispatch = useDispatch();
    const modalOpen = useCallback((key: string) => dispatch(openModalActionCreator(key)), [dispatch]);
    const modalClose = useCallback((key: string) => dispatch(closeModalActionCreator(key)), [dispatch]);
    return <WrappedComponent openModal={modalOpen} closeModal={modalClose} {...props} />;
  };
}
