import React, { useCallback } from 'react';
import { Redirect, useHistory } from 'umi';
import { useSelector } from 'dva';
import { parse } from 'qs';

import { ResetPasswordForm, ResetPasswordFormValues } from 'components';
import type { ConnectState, ILoading } from 'models/connect';
import { ROUTES } from 'config/constants';

import styles from './index.less';

const ResetPassword: React.FC = () => {
  const history = useHistory();
  let {
    models: { auth: loading },
  } = useSelector<ConnectState, ILoading>((state) => state.loading);
  const handlerResetPassword = useCallback((values: ResetPasswordFormValues) => console.log(values), []);

  const { code } = parse(history.location.search, { ignoreQueryPrefix: true });
  if (!code) {
    return <Redirect to={ROUTES.AUTH.SIGN_IN} />;
  }

  if (typeof loading === 'undefined') {
    loading = false;
  }

  return (
    <div className={styles.container}>
      <ResetPasswordForm onSubmit={handlerResetPassword} loading={loading} />
    </div>
  );
};

export default ResetPassword;
