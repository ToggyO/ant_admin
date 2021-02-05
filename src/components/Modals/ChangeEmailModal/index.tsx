import React, { useState } from 'react';
import { Form } from 'antd';

import { ChangeEmailForm, ModalWithFormInstance } from 'components';
import { MODAL_KEYS } from '@/constants';

import { withModalState } from '../../HOC';

import type { IChangeEmailModalProps } from './interfaces';

const ChangeEmailModal: React.FC<IChangeEmailModalProps> = ({ modalKeys, closeModal }) => {
  const [key] = useState(MODAL_KEYS.CHANGE_EMAIL);
  const [form] = Form.useForm();
  return (
    <ModalWithFormInstance
      visible={modalKeys.includes(key)}
      form={form}
      destroyOnClose
      onCancel={() => closeModal(MODAL_KEYS.CHANGE_EMAIL)}
      closable={false}
    >
      <ChangeEmailForm />
    </ModalWithFormInstance>
  );
};

export default withModalState(ChangeEmailModal);
