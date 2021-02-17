import React, { useEffect, useState } from 'react';
import { Form } from 'antd';

import { MODAL_KEYS } from '@/constants';
import { ChangePasswordForm, ModalWithFormInstance } from 'components';

import { withModalState } from '../../HOC';

import type { IChangePasswordModalProps } from './interfaces';

const ChangePasswordModal: React.FC<IChangePasswordModalProps> = ({
  modalKeys,
  onSubmit,
  onCancel,
  afterClose,
  loading,
}) => {
  const [key] = useState(MODAL_KEYS.CHANGE_PASSWORD);
  const [form] = Form.useForm();

  useEffect(() => {
    if (modalKeys && !modalKeys.includes(key)) {
      form.resetFields();
    }
  }, [modalKeys, key, form]);

  return (
    <ModalWithFormInstance
      title="Change password"
      visible={modalKeys && modalKeys.includes(key)}
      form={form}
      destroyOnClose
      onCancel={onCancel}
      closable={false}
      confirmLoading={loading}
      afterClose={afterClose}
    >
      <ChangePasswordForm onSubmit={onSubmit} form={form} />
    </ModalWithFormInstance>
  );
};

export default withModalState<IChangePasswordModalProps>(ChangePasswordModal);
