import React, { useCallback } from 'react';
import { useDispatch } from 'umi';

import { RestorePasswordForm, RestorePasswordFormValues, useLoading } from 'components';

import { restorePasswordActionCreator } from './model/actions';

import styles from './index.less';

const RestorePassword: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useLoading('auth');
  const handlerRestorePassword = useCallback(
    (values: RestorePasswordFormValues) => dispatch(restorePasswordActionCreator(values)),
    [dispatch],
  );
  return (
    <div className={styles.container}>
      <RestorePasswordForm onSubmit={handlerRestorePassword} loading={loading} />
    </div>
  );
};

export default RestorePassword;
