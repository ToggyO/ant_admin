/**
 * Description: Wrapper helps to submit form in modal window
 */

import React from 'react';
import { Modal } from 'antd';

import type { FormEvent } from 'react';
import type { FormInstance } from 'antd/lib/form';
import type { ModalProps } from 'antd/lib/modal';

type ModalWithFormInstanceType = { form: FormInstance } & ModalProps;

export const ModalWithFormInstance: React.FC<ModalWithFormInstanceType> = ({
  children,
  form,
  ...restProps
}) => {
  const okHandle = (e: FormEvent, formInstance: FormInstance): void => {
    e.preventDefault();
    if (formInstance) {
      formInstance.submit();
    }
  };

  return (
    <Modal onOk={(e) => okHandle(e, form)} {...restProps}>
      {children}
    </Modal>
  );
};
