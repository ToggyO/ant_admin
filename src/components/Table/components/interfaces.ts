/**
 * Description: Table components interfaces
 */

import type { ReactElement } from 'react';

export interface ITableSkeletonProps {
  items: any[];
  [propName: string]: any;
}

export interface ITableActionsProps {
  overlay: ReactElement | (() => ReactElement);
}
