import React, { useCallback } from 'react';
import { useDispatch } from 'dva';
import { useSelector } from 'umi';

import type { ConnectState, ILoading } from 'models/connect';

import { LoginForm } from './_components/LoginForm';
import type { LoginFormState } from './types';
import { signInActionCreator } from './model/actions';

import styles from './index.less';

const AuthLogin: React.FC = () => {
  const { models } = useSelector<ConnectState, ILoading>((state) => state.loading);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values: LoginFormState) => {
      delete values.submit;
      dispatch(signInActionCreator(values));
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <LoginForm onFinish={onSubmit} loading={models.auth} />
    </div>
  );
};

export default AuthLogin;
