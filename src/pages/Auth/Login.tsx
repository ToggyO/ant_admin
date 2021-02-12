import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'dva';
import { useSelector } from 'umi';
import { message } from 'antd';

import { ERROR_MESSAGES, ANT_MESSAGE_KEYS } from '@/constants';
import { useClearState, useLoading } from 'components';
import type { ConnectState } from 'models/connect';
import { ResponseCodes } from 'enums/ResponseCodes';

import { LoginForm } from './_components/LoginForm';
import type { LoginFormState } from './types';
import { clearLoginError, signInActionCreator } from './model/actions';
import { loginErrorSelector } from './model/selectors';

import styles from './index.less';

const AuthLogin: React.FC = () => {
  const loading = useLoading('auth');
  const dispatch = useDispatch();
  const errorFromBackend = useSelector<ConnectState, API.ErrorResponse>(loginErrorSelector);

  useEffect(() => {
    if (errorFromBackend.code && errorFromBackend.code === ResponseCodes.InvalidCredentials) {
      message.error({
        content: ERROR_MESSAGES.LOGIN.INVALID_CREDENTIALS,
        duration: 15,
        key: ANT_MESSAGE_KEYS.LOGIN_ERROR,
      });
    }
    return () => {
      message.destroy(ANT_MESSAGE_KEYS.LOGIN_ERROR);
    };
  }, [errorFromBackend.code, dispatch]);

  useClearState(clearLoginError);

  const onSubmit = useCallback(
    (values: LoginFormState) => {
      delete values.submit;
      dispatch(signInActionCreator(values));
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <LoginForm onFinish={onSubmit} loading={loading} />
    </div>
  );
};

export default AuthLogin;
