/**
 * Description: Auth - Login form
 */

import React from 'react';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

import { FormItemWrapper, StandardForm } from 'components';

import options from './options';
import type { ILoginFormProps } from './interfaces';

import styles from './index.less';

export const LoginForm: React.FC<ILoginFormProps> = ({ onFinish, loading }) => (
  <StandardForm onFinish={onFinish} options={options} initialValues={{ rememberMe: true }}>
    <FormItemWrapper type="text-input" name="email" />
    <FormItemWrapper type="password-input" name="password" />
    <FormItemWrapper type="check-box" name="rememberMe" valuePropName="checked" />
    <FormItemWrapper
      type="custom-component"
      name="submit"
      component={(props) => (
        <Button className={styles.submit} loading={loading} {...props}>
          Sign In <SendOutlined />
        </Button>
      )}
    />
  </StandardForm>
);
