import React from 'react';

import { FormItemWrapper, StandardForm } from 'components';

import options from './options';
import type { ICreateUserFormProps } from './interfaces';

export const CreateUserForm: React.FC<ICreateUserFormProps> = ({ onSubmit, form }) => (
  // @ts-ignore
  <StandardForm onFinish={onSubmit} options={options} outerFormInstance={form} layout="vertical">
    <FormItemWrapper type="text-input" name="name" label="First name" />
    <FormItemWrapper type="text-input" name="surname" label="Last name" />
    <FormItemWrapper type="text-input" name="email" label="Email" />
    <FormItemWrapper type="password-input" name="password" label="Password" />
    <FormItemWrapper type="password-input" name="confirmPassword" label="Confirm password" />
  </StandardForm>
);
