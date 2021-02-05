import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'dva';
import { useSelector } from 'umi';
import { message } from 'antd';

import { ERROR_MESSAGES, ANT_MESSAGE_KEYS } from '@/constants';
import { useClearErrors } from 'components';
import type { ConnectState, ILoading } from 'models/connect';
import { ResponseCodes } from 'enums/ResponseCodes';

import { LoginForm } from './_components/LoginForm';
import type { LoginFormState } from './types';
import { clearLoginError, signInActionCreator } from './model/actions';

import styles from './index.less';

const AuthLogin: React.FC = () => {
  const { models } = useSelector<ConnectState, ILoading>((state) => state.loading);
  const errorFromBackend = useSelector<ConnectState, API.ErrorResponse>((state) => state.auth.loginError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorFromBackend.code && errorFromBackend.code === ResponseCodes.InvalidCredentials) {
      message.error({
        content: ERROR_MESSAGES.INVALID_LOGIN_CREDENTIALS,
        duration: 1000,
        key: ANT_MESSAGE_KEYS.LOGIN_ERROR,
      });
    }
    return () => {
      message.destroy(ANT_MESSAGE_KEYS.LOGIN_ERROR);
    };
  }, [errorFromBackend.code, dispatch]);

  useClearErrors(clearLoginError);

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
