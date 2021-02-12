import type { FormInstance } from 'antd/lib/form';

import type { CreateUserFormValues } from './types';

export interface ICreateUserFormProps {
  onSubmit: (values: CreateUserFormValues) => void;
  form?: FormInstance<CreateUserFormValues>;
}
