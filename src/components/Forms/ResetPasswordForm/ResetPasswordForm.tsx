import React from 'react';
import { Button, Row, Typography } from 'antd';
import { ToolOutlined } from '@ant-design/icons';

import { FormItemWrapper, StandardForm } from '../../FormComponents';

import options from './options';
import type { IResetPasswordFormProps } from './interfaces';

import styles from './index.less';

const { Text } = Typography;

export const ResetPasswordForm: React.FC<IResetPasswordFormProps> = ({ onSubmit, loading }) => (
  // @ts-ignore
  <StandardForm onFinish={onSubmit} options={options} layout="vertical">
    <Row className={styles.text} justify="center">
      <Text>Enter PIN code from email, your new password and click &quot;Reset&quot;</Text>
    </Row>
    <FormItemWrapper type="text-input" name="pinCode" label="Pin code" />
    <FormItemWrapper type="password-input" name="password" label="New password" />
    <FormItemWrapper type="password-input" name="confirmPassword" label="Confirm password" />
    <FormItemWrapper
      type="custom-component"
      name="submit"
      component={(props) => (
        <Button className={styles.submit} loading={loading} {...props}>
          Reset <ToolOutlined />
        </Button>
      )}
    />
  </StandardForm>
);
