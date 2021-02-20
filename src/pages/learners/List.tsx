import React, { useEffect } from 'react';
import { useHistory, useSelector } from 'umi';
import { useDispatch } from 'dva';
import { PageHeader } from 'antd';

import { BreadcrumbItem, StandardTable, useClearState, useLoading, useQuery } from 'components';
import { ROUTES } from 'config/constants';
import type { ConnectState } from 'models/connect';
import type { AcademicTableItem } from 'pages/academics/model/types';
import type { AntPagination } from 'utils/helpers';
import { isObjectEmpty } from 'utils/utils';
import { UserRoles } from 'enums/UserRoles';

import { getColumns } from './_components/learners.columns';
import breadcrumbsConfig from './_components/breadcrumbs/list.breadcrumbs';
import { learnersListSelector, learnersPaginationSelector } from './model/selectors';
import {
  clearLearnersGlobalErrorActionCreator,
  clearLearnersListActionCreator,
  getLearnersListActionCreator,
} from './model/actions';
import type { ILearnersListProps } from './interfaces';
import type { LearnerTableItem } from './model/types';

const LearnersList: React.FC<ILearnersListProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const queries = useQuery();
  const loading = useLoading('learners');
  const learners = useSelector<ConnectState, LearnerTableItem[]>(learnersListSelector);
  const pagination = useSelector<ConnectState, AntPagination>(learnersPaginationSelector);

  useEffect(() => {
    if (!isObjectEmpty(queries)) {
      dispatch(getLearnersListActionCreator({ ...queries, role: UserRoles.Learner }));
    }
  }, [dispatch, queries]);

  useClearState(clearLearnersListActionCreator);
  useClearState(clearLearnersGlobalErrorActionCreator);

  return (
    <>
      <PageHeader title="Learners" breadcrumb={{ routes: breadcrumbsConfig, itemRender: BreadcrumbItem }}>
        <StandardTable
          loading={loading}
          columns={getColumns(dispatch, queries)}
          dataSource={learners}
          rowKey={(record) => record.id}
          pagination={pagination}
          onRow={(record: AcademicTableItem) => ({
            onDoubleClick: () => history.push(ROUTES.LEARNERS.DETAILS(record.id)),
          })}
        />
      </PageHeader>
    </>
  );
};

export default LearnersList;
