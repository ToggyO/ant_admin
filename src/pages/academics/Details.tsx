import React, { useCallback, useEffect } from 'react';
import { useHistory, useSelector } from 'umi';
import { useDispatch } from 'dva';
import { PageHeader, Tabs } from 'antd';

import {
  BreadcrumbItem,
  Loader,
  useClearState,
  useIdFromPath,
  useLoading,
  UserDetailsForm,
  PapersList,
} from 'components';

import type { UserDetailsFormValues } from 'components';

import { EntityTypes } from 'enums/EntityTypes';

import { getBreadcrumbs } from './_components/breadcrumbs/details.breadcrumbs';
import { academicDetailsSelector } from './model/selectors';
import {
  clearAcademicDetailsActionCreator,
  clearAcademicsGlobalErrorActionCreator,
  clearAcademicsValidationErrorsActionCreator,
  editAcademicActionCreator,
  getAcademicDetailsActionCreator,
} from './model/actions';

const { TabPane } = Tabs;

const AcademicDetails: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const globalLoading = useLoading('global');
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
    <Loader loading={loading || globalLoading}>
      <PageHeader
        title="Academic profile details"
        onBack={() => history.goBack()}
        breadcrumb={{
          routes: getBreadcrumbs(academic.name),
          itemRender: BreadcrumbItem,
        }}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Profile" key="1">
            <UserDetailsForm
              onSubmit={handleEditUser}
              userData={academic}
              loading={loading}
              targetId={userId}
              entityType={EntityTypes.Academic}
            />
          </TabPane>
          <TabPane tab="Papers" key="2">
            <PapersList userId={userId} />
          </TabPane>
        </Tabs>
      </PageHeader>
    </Loader>
  );
};

export default AcademicDetails;
