/**
 * Description: Animation wrapper component
 * Animate any react component, wrap in in AnimationWrapper
 */

import React, { useState, useEffect } from 'react';

import type { RestAnimationProps } from './types';
import type { IAnimationWrapperProps } from './interfaces';

const restAnimationPropsToString = (animProps: RestAnimationProps): string => {
  let animPropsArray: string[] = [];
  const values = Object.values(animProps) as string[];
  if (values.length) {
    animPropsArray = values.reduce((acc: string[], currentValue) => {
      if (currentValue) {
        acc.push(currentValue);
      }
      return acc;
    }, []);
    return animPropsArray.join(' ');
  }
  return '';
};

export const AnimationWrapper: React.FC<IAnimationWrapperProps> = ({
  show,
  showAnimName = 'fadeIn',
  hideAnimName = 'fadeOut',
  restAnimationProps = {},
  style = {},
  children,
}) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    }
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) {
      setRender(false);
    }
  };

  return render ? (
    <div
      style={{
        animation: `${show ? showAnimName : hideAnimName} ${restAnimationPropsToString(
          restAnimationProps,
        )}`,
        ...style,
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  ) : null;
};
