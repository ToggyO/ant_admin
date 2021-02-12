import React, { useCallback } from 'react';
import { useHistory } from 'umi';
import { useSelector } from 'dva';
import { PageHeader } from 'antd';

import { BreadcrumbItem, Loader, useLoading, UserDetailsForm } from 'components';
import type { UserDetailsFormValues } from 'components';
import type { ConnectState } from 'models/connect';

import breadcrumbsConfig from './_components/breadcrumbs/profile.breadcrumbs';
import type { CurrentUser } from './model/types';
import type { IProfileProps } from './interfaces';
import { currentUserSelector } from './model/selectors';

const Profile: React.FC<IProfileProps> = () => {
  const history = useHistory();
  const loading = useLoading('profile');
  const user = useSelector<ConnectState, CurrentUser>(currentUserSelector);

  const onSubmit = useCallback((values: UserDetailsFormValues) => {
    console.log(values);
  }, []);

  return (
    <Loader loading={loading}>
      <PageHeader
        title="Profile"
        onBack={() => history.goBack()}
        breadcrumb={{ routes: breadcrumbsConfig, itemRender: BreadcrumbItem }}
      >
        <UserDetailsForm onSubmit={onSubmit} userData={user} loading={loading} />
      </PageHeader>
    </Loader>
  );
};

export default Profile;
