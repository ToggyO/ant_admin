import React, { useCallback, useState } from 'react';
import { Form } from 'antd';

import { MODAL_KEYS } from '@/constants';
import { ChangePasswordForm, ModalWithFormInstance } from 'components';

import { withModalState } from '../../HOC';

import type { IChangePasswordModalProps } from './interfaces';

const ChangePasswordModal: React.FC<IChangePasswordModalProps> = ({
  modalKeys,
  closeModal,
  onSubmit,
  onCancel,
  loading,
}) => {
  const [key] = useState(MODAL_KEYS.CHANGE_PASSWORD);
  const [form] = Form.useForm();

  const onCloseModal = useCallback(() => {
    if (closeModal) {
      closeModal(MODAL_KEYS.CHANGE_PASSWORD);
    }
    if (onCancel) {
      onCancel();
    }
  }, [closeModal, onCancel]);

  return (
    <ModalWithFormInstance
      title="Change password"
      visible={modalKeys && modalKeys.includes(key)}
      form={form}
      destroyOnClose
      onCancel={onCloseModal}
      closable={false}
      confirmLoading={loading}
    >
      <ChangePasswordForm onSubmit={onSubmit} form={form} />
    </ModalWithFormInstance>
  );
};

export default withModalState<IChangePasswordModalProps>(ChangePasswordModal);
