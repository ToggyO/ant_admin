import type { WithModalProps } from 'components';
import type { User } from 'pages/Profile/model/types';

import type { UserDetailsFormValues } from './types';

export interface IUserDetailsFormProps<U extends User> extends WithModalProps {
  onSubmit: (values: UserDetailsFormValues) => void;
  userData: U;
  loading: boolean;
}
