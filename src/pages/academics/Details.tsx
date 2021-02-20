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
  UserDetailsFormValues,
} from 'components';

import { getBreadcrumbs } from './_components/breadcrumbs/details.breadcrumbs';
import { academicDetailsSelector } from './model/selectors';
import {
  getAcademicDetailsActionCreator,
  clearAcademicDetailsActionCreator,
  clearAcademicsGlobalErrorActionCreator,
  clearAcademicsValidationErrorsActionCreator,
  editAcademicActionCreator,
} from './model/actions';

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
  useClearState(clearAcademicsGlobalErrorActionCreator);
  useClearState(clearAcademicsValidationErrorsActionCreator);

  const handleEditUser = useCallback(
    (values: UserDetailsFormValues) => {
      const { name, university, about, country: countryId } = values;
      dispatch(
        editAcademicActionCreator({
          name,
          targetId: userId,
          countryId,
          university: university as string,
          about: about as string,
        }),
      );
    },
    [dispatch, userId],
  );

  return (
    <Loader loading={loading}>
      <PageHeader
        title="Academic profile details"
        onBack={() => history.goBack()}
        breadcrumb={{
          routes: getBreadcrumbs(academic.name),
          itemRender: BreadcrumbItem,
        }}
      >
        <UserDetailsForm onSubmit={handleEditUser} userData={academic} loading={loading} />
      </PageHeader>
    </Loader>
  );
};

export default AcademicDetails;
