/**
 * Description: Animation wrapper component interfaces
 */

import type { CSSProperties } from 'react';

import type { RestAnimationProps } from './types';

export interface IAnimationWrapperProps {
  show: boolean;
  showAnimName?: string;
  hideAnimName?: string;
  restAnimationProps?: RestAnimationProps;
  style?: CSSProperties;
}
