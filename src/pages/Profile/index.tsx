import React, { useCallback } from 'react';
import { useSelector } from 'dva';
import { PageHeader } from 'antd';

import { Loader, UserDetailsForm } from 'components';
import type { UserDetailsFormValues } from 'components';
import type { ConnectState } from 'models/connect';

import type { User } from './model/types';

const Profile: React.FC = () => {
  const user = useSelector<ConnectState, User>((state) => state.profile.user);
  let loading = useSelector<ConnectState, boolean | undefined>((state) => state.loading.models.profile);

  if (typeof loading === 'undefined') {
    loading = false;
  }

  const onSubmit = useCallback((values: UserDetailsFormValues) => {
    console.log(values);
  }, []);

  return (
    <Loader loading={loading}>
      <PageHeader title="Profile">
        <UserDetailsForm onSubmit={onSubmit} userData={user} />
      </PageHeader>
    </Loader>
  );
};

export default Profile;
