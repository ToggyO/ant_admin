import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { MODAL_KEYS } from '@/constants';

import { withModalState } from '../../HOC';
import { ModalWithFormInstance } from '../../ModalWithFormInstance';
import { CreateUserForm } from '../../Forms';

import type { ICreateUserModalProps } from './interfaces';

const CreateUserModal: React.FC<ICreateUserModalProps> = ({
  modalKeys,
  closeModal,
  onSubmit,
  onCancel,
  loading,
}) => {
  const [key] = useState(MODAL_KEYS.CREATE_USER);
  const [form] = Form.useForm();

  useEffect(() => {
    if (modalKeys && !modalKeys.includes(key)) {
      form.resetFields();
    }
  }, [modalKeys, form, key]);

  useEffect(() => {}, []);

  const onCloseModal = useCallback(() => {
    if (closeModal) {
      closeModal(MODAL_KEYS.CREATE_USER);
    }
    if (onCancel) {
      onCancel();
    }
  }, [closeModal, onCancel]);

  return (
    <ModalWithFormInstance
      title="Create user"
      visible={modalKeys && modalKeys.includes(key)}
      form={form}
      destroyOnClose
      onCancel={onCloseModal}
      closable={false}
      confirmLoading={loading}
      okText={
        <div>
          Create <EditOutlined />
        </div>
      }
    >
      <CreateUserForm onSubmit={onSubmit} form={form} />
    </ModalWithFormInstance>
  );
};

export default withModalState<ICreateUserModalProps>(CreateUserModal);
