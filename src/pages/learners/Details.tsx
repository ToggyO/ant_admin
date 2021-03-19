import React, { useCallback, useEffect } from 'react';
import { useHistory, useSelector } from 'umi';
import { useDispatch } from 'dva';
import { PageHeader } from 'antd';

import type { UserDetailsFormValues } from 'components';
import {
  BreadcrumbItem,
  Loader,
  useClearState,
  useIdFromPath,
  useLoading,
  UserDetailsForm,
} from 'components';

import { EntityTypes } from 'enums/EntityTypes';

import { learnerDetailsSelector } from './model/selectors';
import { getBreadcrumbs } from './_components/breadcrumbs/details.breadcrumbs';
import {
  clearLearnersDetailsActionCreator,
  clearLearnersGlobalErrorActionCreator,
  clearLearnersValidationErrorsActionCreator,
  editLearnerActionCreator,
  getLearnerDetailsActionCreator,
} from './model/actions';

const LearnerDetails: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useLoading('learners');
  const learner = useSelector(learnerDetailsSelector);
  const userId = useIdFromPath(history.location.pathname);

  useEffect(() => {
    dispatch(getLearnerDetailsActionCreator(userId));
  }, [dispatch, userId]);

  useClearState(clearLearnersDetailsActionCreator);
  useClearState(clearLearnersGlobalErrorActionCreator);
  useClearState(clearLearnersValidationErrorsActionCreator);

  const handleEditUser = useCallback(
    (values: UserDetailsFormValues) => {
      const { name } = values;
      dispatch(editLearnerActionCreator({ targetId: userId, name }));
    },
    [dispatch, userId],
  );

  return (
    <Loader loading={loading}>
      <PageHeader
        title="Learner profile details"
        onBack={() => history.goBack()}
        breadcrumb={{
          routes: getBreadcrumbs(learner.name),
          itemRender: BreadcrumbItem,
        }}
      >
        <UserDetailsForm
          onSubmit={handleEditUser}
          userData={learner}
          loading={loading}
          targetId={userId}
          entityType={EntityTypes.Learner}
        />
      </PageHeader>
    </Loader>
  );
};

export default LearnerDetails;
