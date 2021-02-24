import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'antd';

import { MODAL_KEYS } from '@/constants';
import { ModalWithFormInstance, withModalState } from 'components';

import { ImageList } from '../../ImageList';

import type { IChangeAvatarModalProps } from './interfaces';

const ChangeAvatarModal: React.FC<IChangeAvatarModalProps> = ({
  avatars,
  modalKeys,
  closeModal,
  onSubmit,
  onCancel,
  loading,
  errorsFromBackend,
}) => {
  console.log(onSubmit);
  console.log(errorsFromBackend);
  const [key] = useState(MODAL_KEYS.CHANGE_AVATAR);
  const [form] = Form.useForm();

  useEffect(() => {
    if (modalKeys && !modalKeys.includes(key)) {
      form.resetFields();
    }
  }, [modalKeys, form, key]);

  const onCloseModal = useCallback(() => {
    if (closeModal) {
      closeModal(MODAL_KEYS.CHANGE_AVATAR);
    }
    if (onCancel) {
      form.resetFields();
      onCancel();
    }
  }, [closeModal, onCancel, form]);

  return (
    <ModalWithFormInstance
      title="Change avatar"
      visible={modalKeys && modalKeys.includes(key)}
      form={form}
      destroyOnClose
      onCancel={onCloseModal}
      closable={false}
      confirmLoading={loading}
      okText="Ok"
    >
      <ImageList avatarsList={avatars} />
    </ModalWithFormInstance>
  );
};

export default withModalState(ChangeAvatarModal);
