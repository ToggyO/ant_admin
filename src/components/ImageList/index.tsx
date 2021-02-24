import React from 'react';
import { Row } from 'antd';

import type { IImageListProps } from './interfaces';
import { ImageListItem } from './_components/ImageListItem';

import styles from './index.less';

export const ImageList: React.FC<IImageListProps> = ({ avatarsList }) => (
  <Row className={styles.row}>
    {avatarsList.map((item) => (
      <ImageListItem src={item.path} />
    ))}
  </Row>
);
