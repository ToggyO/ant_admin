import React from 'react';
import { StandardForm } from 'components';

import options from './options';
import type { ICreateUserFormProps } from './interfaces';

export const CreateUserForm: React.FC<ICreateUserFormProps> = ({ onSubmit }) => (
  <StandardForm onFinish={onSubmit} options={options}></StandardForm>
);
