import React from 'react';
import { useSelector } from 'umi';
import { Alert, PageHeader, Typography } from 'antd';
import { SmileTwoTone, HeartTwoTone } from '@ant-design/icons';

import { BreadcrumbItem } from 'components';
import { APP_NAME } from 'config/constants';
import type { ConnectState } from 'models/connect';
import type { User } from 'pages/Profile/model/types';

const AdminPage: React.FC = () => {
  const user = useSelector<ConnectState, User>((state) => state.profile.user);
  return (
    <PageHeader breadcrumb={{ routes: [{ path: '/', breadcrumbName: 'Home' }], itemRender: BreadcrumbItem }}>
      <Alert
        message={`Welcome back, ${user.name}!`}
        type="success"
        showIcon
        banner
        style={{ marginBottom: 48 }}
      />
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        <SmileTwoTone /> {APP_NAME} <HeartTwoTone twoToneColor="#eb2f96" /> You
      </Typography.Title>
    </PageHeader>
  );
};

export default AdminPage;
