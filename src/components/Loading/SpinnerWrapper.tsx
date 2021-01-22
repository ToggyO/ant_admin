/**
 * Description: Spinner component
 * Shown during the data loading
 */

import React from 'react';
import { Spin } from 'antd';

import type { ISpinnerProps } from './interfaces';

export const Loader: React.FC<ISpinnerProps> = ({
  children,
  loading = false,
  size = 'large',
}) => (
  <Spin size={size} spinning={loading}>
    {children}
  </Spin>
);
