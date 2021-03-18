import React, { useCallback } from 'react';
import type { PropsWithChildren } from 'react';
import { useDispatch } from 'umi';
import { useSelector } from 'dva';
import { Button, Col, Divider, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { FileImageTwoTone, LockTwoTone, MailTwoTone, SaveOutlined } from '@ant-design/icons';

import { MODAL_KEYS } from '@/constants';
import type {
  ChangeEmailFormValues,
  ChangePasswordFormValues,
  UserDetailsFormValues,
  SelectOptions,
} from 'components';
import { ChangeEmailModal, ChangePasswordModal, AvatarUploader, withModal, ImageContainer } from 'components';
import { changePasswordActionCreator } from 'pages/Profile/model/actions';
import { UserRoles } from 'enums/UserRoles';
import type { CurrentUser, User } from 'pages/Profile/model/types';
import type { ConnectState } from 'models/connect';
import { currentUserSelector } from 'services/user/selectors';
import { countriesListSelector } from 'models/global/selectors';
import { validationErrorsSelector } from 'models/common.selectors';
import { changeAvatarActionCreator, changeEmailActionCreator } from 'models/global/actions';

import { FormItemWrapper, StandardForm } from '../../FormComponents';

import options from './options';
import { Subscription } from './_components/Subscription';
import { RoleRenderer } from './_components/RoleRenderer';
import { validateAvatarFile } from './_components/validate-file';
import type { IUserDetailsFormProps } from './interfaces';

import styles from './index.less';

function UserDetailsForm<T extends Omit<User, 'country'> & { country: number }>({
  onSubmit,
  userData,
  openModal,
  closeModal,
  loading,
  targetId,
  entityType,
  onClearValidationErrors,
}: PropsWithChildren<IUserDetailsFormProps<T>>): JSX.Element {
  const [form] = useForm<UserDetailsFormValues>();
  const dispatch = useDispatch();
  const currentUser = useSelector<ConnectState, CurrentUser>(currentUserSelector);
  const countries = useSelector<ConnectState, SelectOptions[]>(countriesListSelector);
  const validationErrors = useSelector<ConnectState, any>(validationErrorsSelector);

  const handleChangeEmail = useCallback(
    (values: ChangeEmailFormValues) => {
      dispatch(changeEmailActionCreator({ ...values }));
    },
    [dispatch],
  );

  const handleChangePassword = useCallback(
    (values: ChangePasswordFormValues) => {
      dispatch(changePasswordActionCreator(values));
    },
    [dispatch],
  );

  const handleChangeEmailModalClose = useCallback(() => closeModal && closeModal(MODAL_KEYS.CHANGE_EMAIL), [
    closeModal,
  ]);

  const handleChangePasswordModalClose = useCallback(
    () => closeModal && closeModal(MODAL_KEYS.CHANGE_PASSWORD),
    [closeModal],
  );

  const isAllowToEditing = userData.email === currentUser.email && currentUser.role === UserRoles.Admin;

  return (
    <>
      <StandardForm
        externalFormInstance={form}
        onFinish={onSubmit}
        options={options}
        layout="vertical"
        initialValues={userData}
        asyncInitValues={userData}
      >
        <Row justify="center" className={styles.image_container}>
          <Col>
            <ImageContainer src={userData.avatar} globalLoading={loading} />
          </Col>
          <Col>
            <AvatarUploader
              validateFileFunc={validateAvatarFile}
              uploadActionCreator={changeAvatarActionCreator}
              extraPayload={{ targetId, entityType }}
            >
              <Button size="large" type="default" htmlType="button">
                Change avatar <FileImageTwoTone />
              </Button>
            </AvatarUploader>
          </Col>
        </Row>

        <Row justify="center">
          <Col sm={24} md={18} lg={16} xl={12} xxl={10}>
            <FormItemWrapper
              type="text-input"
              name="name"
              label="Full name"
              propsToChild={{
                disabled: isAllowToEditing,
              }}
            />
            <FormItemWrapper
              type="text-input"
              name="email"
              label="Email"
              propsToChild={{
                disabled: true,
              }}
            />

            <FormItemWrapper
              type="custom-component"
              name="role"
              label="Role"
              component={(props) => <RoleRenderer role={userData.role} {...props} />}
            />

            {!isAllowToEditing && userData.role === UserRoles.Learner && (
              <FormItemWrapper
                type="custom-component"
                name="subscription"
                label="Subscription"
                component={(props) => <Subscription userData={userData} {...props} />}
              />
            )}

            <Divider />

            <Row justify="space-between">
              <Button
                size="large"
                type="default"
                htmlType="button"
                onClick={() => openModal && openModal(MODAL_KEYS.CHANGE_EMAIL)}
              >
                Change email <MailTwoTone />
              </Button>
              <Button
                size="large"
                type="default"
                htmlType="button"
                onClick={() => openModal && openModal(MODAL_KEYS.CHANGE_PASSWORD)}
              >
                Change password <LockTwoTone />
              </Button>
            </Row>

            <Divider />

            {userData.role !== UserRoles.Admin && (
              <>
                <FormItemWrapper
                  type="async-load-select"
                  name="country"
                  label="Country"
                  dataSource={countries}
                />
                <FormItemWrapper type="text-input" name="university" label="University" />
                <FormItemWrapper type="text-area" name="about" label="About" />
              </>
            )}

            {currentUser.role !== UserRoles.Admin && (
              <Row justify="center">
                <FormItemWrapper
                  type="custom-component"
                  name="submit"
                  component={(props) => (
                    <Button {...props}>
                      Save <SaveOutlined />
                    </Button>
                  )}
                />
              </Row>
            )}
          </Col>
        </Row>
      </StandardForm>
      <ChangeEmailModal
        onSubmit={handleChangeEmail}
        onCancel={handleChangeEmailModalClose}
        afterClose={onClearValidationErrors}
        validationErrors={validationErrors}
        loading={loading}
      />
      <ChangePasswordModal
        onSubmit={handleChangePassword}
        onCancel={handleChangePasswordModalClose}
        afterClose={onClearValidationErrors}
        loading={loading}
      />
    </>
  );
}

export default withModal(UserDetailsForm);
