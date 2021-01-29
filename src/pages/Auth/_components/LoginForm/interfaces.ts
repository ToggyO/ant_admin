import type { LoginFormState } from '../../types';

export interface ILoginFormProps {
  onFinish: (values: LoginFormState) => void;
  loading?: boolean;
}
