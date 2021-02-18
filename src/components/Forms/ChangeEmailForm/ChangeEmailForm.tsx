import React from 'react';

import { FormItemWrapper, StandardForm } from '@/components';

import options from './options';
import type { IChangeEmailFormProps } from './interfaces';

export const ChangeEmailForm: React.FC<IChangeEmailFormProps> = ({ onSubmit, form }) => (
  <StandardForm onFinish={onSubmit} options={options} layout="vertical" externalFormInstance={form}>
    <FormItemWrapper type="text-input" name="email" label="New email" />
  </StandardForm>
);
