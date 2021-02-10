import type { FormInstance } from 'antd/lib/form';

import type { ChangeEmailFormValues } from './types';

export interface IChangeEmailFormProps {
  onSubmit: (values: ChangeEmailFormValues) => void;
  form?: FormInstance<ChangeEmailFormValues>;
}
