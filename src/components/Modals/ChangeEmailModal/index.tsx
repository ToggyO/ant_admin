import React, { useEffect, useState } from 'react';
import { Form } from 'antd';

import { ChangeEmailForm, ModalWithFormInstance } from 'components';
import { MODAL_KEYS } from '@/constants';

import { withModalState } from '../../HOC';

import type { IChangeEmailModalProps } from './interfaces';

const ChangeEmailModal: React.FC<IChangeEmailModalProps> = ({
  modalKeys,
  onSubmit,
  onCancel,
  afterClose,
  loading,
}) => {
  const [key] = useState(MODAL_KEYS.CHANGE_EMAIL);
  const [form] = Form.useForm();

  useEffect(() => {
    if (modalKeys && !modalKeys.includes(key)) {
      form.resetFields();
    }
  }, [modalKeys, key, form]);

  return (
    <ModalWithFormInstance
      title="Change email"
      visible={modalKeys && modalKeys.includes(key)}
      form={form}
      destroyOnClose
      onCancel={onCancel}
      closable={false}
      confirmLoading={loading}
      afterClose={afterClose}
    >
      <ChangeEmailForm onSubmit={onSubmit} form={form} />
    </ModalWithFormInstance>
  );
};

export default withModalState<IChangeEmailModalProps>(ChangeEmailModal);
