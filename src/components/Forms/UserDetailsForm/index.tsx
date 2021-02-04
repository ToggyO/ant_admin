import React from 'react';
import { Row, Col, Avatar, Button, Divider } from 'antd';
import { EditOutlined, FileImageTwoTone, LockTwoTone, MailTwoTone, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'dva';

import type { ConnectState } from 'models/connect';
import type { User } from 'pages/Profile/model/types';
import { UserRoles } from 'enums/UserRoles';

import { FormItemWrapper, StandardForm } from '../../FormComponents';

import options from './options';
import { Subscription } from './_components/Subscription';
import type { IUserDetailsFormProps } from './interfaces';

import styles from './index.less';

export const UserDetailsForm: React.FC<IUserDetailsFormProps> = ({ onSubmit, userData }) => {
  const currentUser = useSelector<ConnectState, User>((state) => state.profile.user);
  return (
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
            <Button size="large" type="default" htmlType="button">
              Change email <MailTwoTone />
            </Button>
            <Button size="large" type="default" htmlType="button">
              Change avatar <FileImageTwoTone />
            </Button>
            <Button size="large" type="default" htmlType="button">
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
  );
};
