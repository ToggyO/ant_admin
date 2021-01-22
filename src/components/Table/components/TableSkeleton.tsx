/**
 * Description: Skeleton for empty data in ant design Table component
 */

import React from 'react';
import { Skeleton } from 'antd';

import type { ITableSkeletonProps } from './interfaces';

export const TableSkeleton: React.FC<ITableSkeletonProps> = ({ items, ...rest }) => (
  <>
    {items.map((item, index) => (
      <div key={`skeletonKey_${index + 1}_${item}`}>
        <Skeleton {...rest} />
      </div>
    ))}
  </>
);

