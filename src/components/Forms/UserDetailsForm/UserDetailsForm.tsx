import React, { useCallback } from 'react';
import { Row, Col, Avatar, Button, Divider } from 'antd';
import { EditOutlined, FileImageTwoTone, LockTwoTone, MailTwoTone, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'dva';

import { MODAL_KEYS } from '@/constants';
import {
  ChangeEmailFormValues,
  ChangeEmailModal,
  ChangePasswordFormValues,
  ChangePasswordModal,
  withModal,
} from 'components';
import type { ConnectState } from 'models/connect';
import type { User } from 'pages/Profile/model/types';
import { UserRoles } from 'enums/UserRoles';

import { FormItemWrapper, StandardForm } from '../../FormComponents';

import options from './options';
import { Subscription } from './_components/Subscription';
import type { IUserDetailsFormProps } from './interfaces';

import styles from './index.less';

const UserDetailsForm: React.FC<IUserDetailsFormProps> = ({ onSubmit, userData, openModal, loading }) => {
  const currentUser = useSelector<ConnectState, User>((state) => state.profile.user);

  const handleChangeEmail = useCallback((values: ChangeEmailFormValues) => {
    console.log(values);
  }, []);

  const handleChangePassword = useCallback((values: ChangePasswordFormValues) => {
    console.log(values);
  }, []);

  return (
    <>
      <StandardForm onFinish={onSubmit} options={options} layout="vertical" initialValues={userData}>
        <Row justify="center">
          <Col className={styles.avatar_container}>
            <Avatar size={128} icon={<UserOutlined />} />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={8}>
            <FormItemWrapper type="text-input" name="name" label="First name" />
            <FormItemWrapper type="text-input" name="surname" label="Surname" />
            <FormItemWrapper type="text-input" name="email" label="Email" />
            <FormItemWrapper
              type="select"
              name="role"
              label="Role"
              propsToChild={{
                disabled: userData.email === currentUser.email && currentUser.role === UserRoles.Admin,
              }}
            />
            <FormItemWrapper
              type="custom-component"
              name="subscription"
              label="Subscription"
              component={(props) => <Subscription userData={userData} {...props} />}
            />

            <Divider />

            <Row justify="space-between">
              <Button
                size="large"
                type="default"
                htmlType="button"
                onClick={() => openModal(MODAL_KEYS.CHANGE_EMAIL)}
              >
                Change email <MailTwoTone />
              </Button>
              <Button size="large" type="default" htmlType="button">
                Change avatar <FileImageTwoTone />
              </Button>
              <Button
                size="large"
                type="default"
                htmlType="button"
                onClick={() => openModal(MODAL_KEYS.CHANGE_PASSWORD)}
              >
                Change password <LockTwoTone />
              </Button>
            </Row>

            <Divider />

            <Row justify="center">
              <FormItemWrapper
                type="custom-component"
                name="submit"
                component={(props) => (
                  <Button {...props}>
                    Save <EditOutlined />
                  </Button>
                )}
              />
            </Row>
          </Col>
        </Row>
      </StandardForm>
      <ChangeEmailModal onSubmit={handleChangeEmail} loading={loading} />
      <ChangePasswordModal onSubmit={handleChangePassword} loading={loading} />
    </>
  );
};

export default withModal(UserDetailsForm);
