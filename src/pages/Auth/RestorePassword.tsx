import React, { useCallback } from 'react';
import { useSelector } from 'dva';

import { RestorePasswordForm, RestorePasswordFormValues } from 'components';
import type { ConnectState, ILoading } from 'models/connect';

import styles from './index.less';

const RestorePassword: React.FC = () => {
  let {
    models: { auth: loading },
  } = useSelector<ConnectState, ILoading>((state) => state.loading);

  if (typeof loading === 'undefined') {
    loading = false;
  }

  const handlerRestorePassword = useCallback((values: RestorePasswordFormValues) => console.log(values), []);

  return (
    <div className={styles.container}>
      <RestorePasswordForm onSubmit={handlerRestorePassword} loading={loading} />
    </div>
  );
};

export default RestorePassword;
