import React from 'react';

import { FormItemWrapper, StandardForm } from 'components';

import options from './options';
import type { ICreateUserFormProps } from './interfaces';

export const CreateUserForm: React.FC<ICreateUserFormProps> = ({ onSubmit, form, errorsFromBackend }) => (
  // @ts-ignore
  <StandardForm
    onFinish={onSubmit}
    options={options}
    externalFormInstance={form}
    layout="vertical"
    errorsFromBackend={errorsFromBackend}
  >
    <FormItemWrapper type="text-input" name="name" label="Full name" />
    <FormItemWrapper type="text-input" name="email" label="Email" />
    <FormItemWrapper type="text-input" name="university" label="University" />
    <FormItemWrapper type="text-area" name="about" label="About" />
  </StandardForm>
);
