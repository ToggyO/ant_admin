import React from 'react';
import { Space, Switch, Typography } from 'antd';

import type { ISubscriptionProps } from './interfaces';

import styles from './index.less';

const { Text } = Typography;

export const Subscription: React.FC<ISubscriptionProps> = ({ userData, ...rest }) => (
  <Space size={30} className={styles.subscription}>
    <Switch {...rest} checked={!!userData.subscribtion} />
    <Text>{userData?.subscribtion || 'No active subscription'}</Text>
  </Space>
);
