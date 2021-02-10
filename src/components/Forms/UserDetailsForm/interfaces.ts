import type { User } from 'pages/Profile/model/types';
import type { WithModalProps } from '@/components/HOC/withModal';

import type { UserDetailsFormValues } from './types';

export interface IUserDetailsFormProps extends WithModalProps {
  onSubmit: (values: UserDetailsFormValues) => void;
  userData: User;
  loading: boolean;
}
