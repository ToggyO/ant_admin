import type { ICommonModalFormProps } from '../interfaces';
import type { ChangePasswordFormValues } from '../../Forms';

export interface IChangePasswordModalProps extends ICommonModalFormProps {
  onSubmit: (values: ChangePasswordFormValues) => void;
  loading: boolean;
}
