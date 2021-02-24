import React from 'react';
import { Space, Switch, Typography } from 'antd';

import { SPACE_32 } from '@/constants';

import type { ISubscriptionProps } from './interfaces';

import styles from './index.less';

const { Text } = Typography;

export const Subscription: React.FC<ISubscriptionProps> = ({ userData, ...rest }) => (
  <Space size={SPACE_32} className={styles.subscription}>
    <Switch {...rest} checked={!!userData.subscription} />
    <Text>{userData?.subscription || 'No active subscription'}</Text>
  </Space>
);
