import type { FormInstance } from 'antd/lib/form';

import type { ChangePasswordFormValues } from './types';

export interface IChangePasswordFormProps {
  onSubmit: (values: ChangePasswordFormValues) => void;
  form?: FormInstance<ChangePasswordFormValues>;
}
