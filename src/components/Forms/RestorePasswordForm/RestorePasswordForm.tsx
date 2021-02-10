import React from 'react';
import { Link } from 'umi';
import { Button, Row, Typography } from 'antd';
import { RotateRightOutlined, LeftOutlined } from '@ant-design/icons';

import { ROUTES } from 'config/constants';

import { FormItemWrapper, StandardForm } from '../../FormComponents';

import type { IRestorePasswordFormProps } from './interfaces';

import options from './options';

import styles from './index.less';

const { Text } = Typography;

export const RestorePasswordForm: React.FC<IRestorePasswordFormProps> = ({ onSubmit, loading }) => (
  <StandardForm onFinish={onSubmit} options={options} layout="vertical">
    <Row className={styles.text} justify="center">
      <Text>Enter the email you used to sign up and we&apos;ll</Text>
      <Text>send you a link to reset your password.</Text>
    </Row>
    <FormItemWrapper type="text-input" name="email" label="Email" />
    <FormItemWrapper
      type="custom-component"
      name="submit"
      component={(props) => (
        <Button className={styles.submit} loading={loading} {...props}>
          Send link <RotateRightOutlined />
        </Button>
      )}
    />
    <Link className={styles.link_container} to={ROUTES.AUTH.SIGN_IN}>
      <LeftOutlined />
      &nbsp;&nbsp;&nbsp;Back to sign in
    </Link>
  </StandardForm>
);
