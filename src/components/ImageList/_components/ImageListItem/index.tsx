import React from 'react';
import { Image, Space } from 'antd';

import { SPACE_12 } from '@/constants';

import type { IImageListItemProps } from '../../interfaces';

export const ImageListItem: React.FC<IImageListItemProps> = ({ src }) => (
  <Space size={SPACE_12}>
    <Image src={src} />
  </Space>
);
