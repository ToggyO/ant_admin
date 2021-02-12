import React from 'react';
import { useSelector } from 'umi';

import { withModal } from 'components';
import type { ConnectState } from 'models/connect';
import type { IModalState } from 'models/modal/interfaces';

import type { WithModalStateProps } from './interfaces';

export function withModalState<T extends WithModalStateProps = any>(
  WrappedComponent: React.ComponentType<T>,
) {
  return withModal((props: T) => {
    const { modalKeys } = useSelector<ConnectState, IModalState>((state) => state.modal);
    return <WrappedComponent {...props} modalKeys={modalKeys} />;
  });
}
