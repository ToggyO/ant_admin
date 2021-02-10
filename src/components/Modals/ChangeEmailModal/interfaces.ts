import type { ICommonModalFormProps } from '../interfaces';
import type { ChangeEmailFormValues } from '../../Forms';

export interface IChangeEmailModalProps extends ICommonModalFormProps {
  onSubmit: (values: ChangeEmailFormValues) => void;
}
