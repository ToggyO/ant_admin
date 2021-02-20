import React, { useCallback } from 'react';
import { useDispatch, useHistory } from 'umi';
import { useSelector } from 'dva';
import { PageHeader } from 'antd';

import { BreadcrumbItem, Loader, useLoading, UserDetailsForm } from 'components';
import type { UserDetailsFormValues } from 'components';
import type { ConnectState } from 'models/connect';
import { currentUserSelector } from 'services/user/selectors';

import breadcrumbsConfig from './_components/breadcrumbs/profile.breadcrumbs';
import type { CurrentUser } from './model/types';
import type { IProfileProps } from './interfaces';
import { clearProfileGlobalErrorActionCreator } from './model/actions';

const Profile: React.FC<IProfileProps> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useLoading('profile');
  const user = useSelector<ConnectState, CurrentUser>(currentUserSelector);

  const onSubmit = useCallback((values: UserDetailsFormValues) => {
    // const { file } = values;
    console.log(values);
    // dispatch(changeAvatarActionCreator({ file }));
  }, []);

  const handlerClearValidationErrors = useCallback(() => dispatch(clearProfileGlobalErrorActionCreator()), [
    dispatch,
  ]);

  return (
    <Loader loading={loading}>
      <PageHeader
        title="Profile"
        onBack={() => history.goBack()}
        breadcrumb={{ routes: breadcrumbsConfig, itemRender: BreadcrumbItem }}
      >
        <UserDetailsForm
          onSubmit={onSubmit}
          userData={user}
          loading={loading}
          onClearValidationErrors={handlerClearValidationErrors}
        />
      </PageHeader>
    </Loader>
  );
};

export default Profile;
