import React, { useCallback, useState } from 'react';
import { Form } from 'antd';

import { ChangeEmailForm, ModalWithFormInstance } from 'components';
import { MODAL_KEYS } from '@/constants';

import { withModalState } from '../../HOC';

import type { IChangeEmailModalProps } from './interfaces';

const ChangeEmailModal: React.FC<IChangeEmailModalProps> = ({
  modalKeys,
  closeModal,
  onSubmit,
  onCancel,
  loading,
}) => {
  const [key] = useState(MODAL_KEYS.CHANGE_EMAIL);
  const [form] = Form.useForm();

  const onCloseModal = useCallback(() => {
    if (closeModal) {
      closeModal(MODAL_KEYS.CHANGE_EMAIL);
    }
    if (onCancel) {
      onCancel();
    }
  }, [closeModal, onCancel]);

  return (
    <ModalWithFormInstance
      title="Change email"
      visible={modalKeys && modalKeys.includes(key)}
      form={form}
      destroyOnClose
      onCancel={onCloseModal}
      closable={false}
      confirmLoading={loading}
    >
      <ChangeEmailForm onSubmit={onSubmit} form={form} />
    </ModalWithFormInstance>
  );
};

export default withModalState<IChangeEmailModalProps>(ChangeEmailModal);
