/**
 * Description: Wrapper on ant design Form component
 */

import React, { useEffect } from 'react';
import { Form } from 'antd';

import { useBackendErrors } from '../userHooks/useBackendErrors';

import type { IStandardFormContextType, IStandardFormProps } from './interfaces';

export const StandardFormContext = React.createContext<IStandardFormContextType>({
  form: {},
  options: {},
});

export const StandardForm: React.FC<IStandardFormProps> = ({
  children,
  onFinish,
  onFinishFailed,
  options,
  outerFormInstance,
  asyncInitValues,
  errorsFromBackend,
  ...rest
}) => {
  const [form] = Form.useForm(outerFormInstance);
  const contextValue = { form, options };

  useEffect(() => {
    if (asyncInitValues) {
      form.resetFields();
    }
  }, [asyncInitValues, form]);

  /**
   * Description: write custom implementation of `useBackendErrors` hook
   * depends on errors responses from your backend
   */
  useBackendErrors(errorsFromBackend, form);

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form} {...rest}>
      <StandardFormContext.Provider value={contextValue}>{children}</StandardFormContext.Provider>
    </Form>
  );
};