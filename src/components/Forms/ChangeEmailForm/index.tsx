import React from 'react';
import { FormItemWrapper, StandardForm } from '@/components';

import options from './options';

export const ChangeEmailForm: React.FC = ({ onSubmit }) => (
  <StandardForm onFinish={onSubmit} options={options}>
    <FormItemWrapper type="text-input" name="email" />
  </StandardForm>
);
