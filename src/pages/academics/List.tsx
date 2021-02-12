import React, { useCallback, useEffect } from 'react';
import { useHistory, useSelector } from 'umi';
import { useDispatch } from 'dva';
import { Button, message, PageHeader } from 'antd';

import { ANT_MESSAGE_KEYS, MODAL_KEYS } from '@/constants';
import {
  BreadcrumbItem,
  StandardTable,
  useClearState,
  useLoading,
  useQuery,
  withModal,
  CreateUserModal,
  CreateUserFormValues,
} from 'components';
import type { ConnectState } from 'models/connect';
import { UserRoles } from 'enums/UserRoles';
import { ROUTES } from 'config/constants';
import { isObjectEmpty } from 'utils/utils';
import type { AntPagination } from 'utils/helpers';

import { getColumns } from './_components/academics.columns';
import breadcrumbsConfig from './_components/breadcrumbs/list.breadcrumbs';
import type { AcademicTableItem, CreateAcademicDTO } from './model/types';
import {
  clearAcademicsListActionCreator,
  createAcademicActionCreator,
  getAcademicsListActionCreator,
} from './model/actions';
import {
  academicsListSelector,
  academicsPaginationSelector,
  academicGlobalErrorSelector,
} from './model/selectors';
import type { IAcademicsListProps } from './interfaces';

const AcademicsList: React.FC<IAcademicsListProps> = ({ openModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const queries = useQuery();
  const loading = useLoading('academics');
  const academics = useSelector<ConnectState, AcademicTableItem[]>(academicsListSelector);
  const pagination = useSelector<ConnectState, AntPagination>(academicsPaginationSelector);
  const globalError = useSelector<ConnectState, API.ErrorResponse>(academicGlobalErrorSelector);

  useEffect(() => {
    if (!isObjectEmpty(queries)) {
      dispatch(getAcademicsListActionCreator({ ...queries, role: UserRoles.Academic }));
    }
  }, [dispatch, queries]);

  useClearState(clearAcademicsListActionCreator);

  useEffect(() => {
    console.log(globalError);
    if (!isObjectEmpty(globalError)) {
      console.log('in message');
      message.error({
        content: globalError.message,
        duration: 5,
        key: ANT_MESSAGE_KEYS.USER_EXISTS,
      });
    }
  }, [globalError]);

  const handlerCreateUser = useCallback(
    (values: CreateUserFormValues) => {
      const dto: API.ReloadList<CreateAcademicDTO, API.RequestParams> = {
        payload: {
          name: values.name,
          surname: values.surname,
          email: values.email,
          password: values.password,
        },
        params: { ...queries },
      };
      dispatch(createAcademicActionCreator(dto));
    },
    [queries, dispatch],
  );

  const renderCreateButton = useCallback(
    () => (
      <Button type="primary" htmlType="button" onClick={() => openModal && openModal(MODAL_KEYS.CREATE_USER)}>
        Create academic
      </Button>
    ),
    [openModal],
  );

  return (
    <>
      <PageHeader title="Academics" breadcrumb={{ routes: breadcrumbsConfig, itemRender: BreadcrumbItem }}>
        <StandardTable
          loading={loading}
          columns={getColumns(dispatch)}
          dataSource={academics}
          rowKey={(record) => record.id}
          pagination={pagination}
          onRow={(record: AcademicTableItem) => ({
            onDoubleClick: () => history.push(ROUTES.ACADEMICS.DETAILS(record.id)),
          })}
          extraContent={renderCreateButton()}
        />
      </PageHeader>
      <CreateUserModal onSubmit={handlerCreateUser} loading={loading} />
    </>
  );
};

export default withModal<IAcademicsListProps>(AcademicsList);
