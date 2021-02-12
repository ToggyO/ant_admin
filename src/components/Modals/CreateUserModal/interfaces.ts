import type { ICommonModalFormProps } from '../interfaces';
import type { CreateUserFormValues } from '../../Forms';

export interface ICreateUserModalProps extends ICommonModalFormProps {
  onSubmit: (values: CreateUserFormValues) => void;
  loading: boolean;
}
