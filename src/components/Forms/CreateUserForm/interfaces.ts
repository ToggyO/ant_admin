import type { FormInstance } from 'antd/lib/form';

import type { IStandardFormProps } from '../../FormComponents/interfaces';

import type { CreateUserFormValues } from './types';

export interface ICreateUserFormProps
  extends Pick<IStandardFormProps<API.ValidationApiError>, 'errorsFromBackend'> {
  onSubmit: (values: CreateUserFormValues) => void;
  form?: FormInstance<CreateUserFormValues>;
}
