import type { LoginFormState } from 'pages/Auth/types';

export interface ILoginFormProps {
  onFinish: (values: LoginFormState) => void;
  loading?: boolean;
}
