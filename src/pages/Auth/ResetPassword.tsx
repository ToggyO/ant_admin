import React, { useCallback } from 'react';
import { useDispatch } from 'umi';

import { ResetPasswordForm, ResetPasswordFormValues, useClearState, useLoading } from 'components';

import { resetPasswordActionCreator, clearGlobalLoginErrorActionCreator } from './model/actions';
import type { ResetPasswordDTO } from './types';

import styles from './index.less';

const ResetPassword: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useLoading('auth');

  useClearState(clearGlobalLoginErrorActionCreator);

  const handlerResetPassword = useCallback(
    (values: ResetPasswordFormValues) => {
      const payload: ResetPasswordDTO = { pinCode: values.pinCode, password: values.password };
      dispatch(resetPasswordActionCreator(payload));
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <ResetPasswordForm onSubmit={handlerResetPassword} loading={loading} />
    </div>
  );
};

export default ResetPassword;
