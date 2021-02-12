import React, { useCallback, useEffect } from 'react';
import { useHistory, useSelector } from 'umi';
import { useDispatch } from 'dva';
import { PageHeader } from 'antd';

import {
  BreadcrumbItem,
  Loader,
  useClearState,
  useIdFromPath,
  useLoading,
  UserDetailsForm,
} from 'components';
import { getFullName } from 'utils/helpers';

import { getBreadcrumbs } from './_components/breadcrumbs/details.breadcrumbs';
import { academicDetailsSelector } from './model/selectors';
import { getAcademicDetailsActionCreator, clearAcademicDetailsActionCreator } from './model/actions';

const AcademicDetails: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useLoading('academics');
  const academic = useSelector(academicDetailsSelector);
  const userId = useIdFromPath(history.location.pathname);

  useEffect(() => {
    dispatch(getAcademicDetailsActionCreator(userId));
  }, [userId, dispatch]);

  useClearState(clearAcademicDetailsActionCreator);

  const handleEditUser = useCallback((values) => console.log(values), []);

  return (
    <Loader loading={loading}>
      <PageHeader
        title="Academic profile details"
        onBack={() => history.goBack()}
        breadcrumb={{
          routes: getBreadcrumbs(getFullName({ firstName: academic.name, lastName: academic.surname })),
          itemRender: BreadcrumbItem,
        }}
      >
        <UserDetailsForm onSubmit={handleEditUser} userData={academic} loading={loading} />
      </PageHeader>
    </Loader>
  );
};

export default AcademicDetails;
