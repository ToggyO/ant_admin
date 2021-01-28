import React from 'react';
import { useDispatch } from 'dva';

import type { LoginFormState } from './types';
import { LoginForm } from './_components/LoginForm';

import styles from './index.less';
import { signInActionCreator } from './model/actions';

const AuthLogin: React.FC = () => {
  const dispatch = useDispatch();

  function onSubmit(values: LoginFormState) {
    delete values.submit;
    dispatch(signInActionCreator(values));
  }

  return (
    <div className={styles.container}>
      <LoginForm onFinish={onSubmit} />
    </div>
  );
};

export default AuthLogin;
