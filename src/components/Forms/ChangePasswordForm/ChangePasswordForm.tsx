import React from 'react';

import { FormItemWrapper, StandardForm } from '@/components';

import options from './options';
import type { IChangePasswordFormProps } from './interfaces';

export const ChangePasswordForm: React.FC<IChangePasswordFormProps> = ({ onSubmit, form }) => (
  // @ts-ignore
  <StandardForm onFinish={onSubmit} options={options} layout="vertical" outerFormInstance={form}>
    <FormItemWrapper type="password-input" name="password" label="New password" />
    <FormItemWrapper type="password-input" name="confirmPassword" label="Confirm new password" />
  </StandardForm>
);
