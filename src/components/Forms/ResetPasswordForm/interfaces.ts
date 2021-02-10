import type { ResetPasswordFormValues } from './types';

export interface IResetPasswordFormProps {
  onSubmit: (values: ResetPasswordFormValues) => void;
  loading: boolean;
}
