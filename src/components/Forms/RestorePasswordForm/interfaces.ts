import type { RestorePasswordFormValues } from './types';

export interface IRestorePasswordFormProps {
  onSubmit: (values: RestorePasswordFormValues) => void;
  loading: boolean;
}
