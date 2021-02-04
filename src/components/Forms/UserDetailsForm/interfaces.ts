import type { User } from 'pages/Profile/model/types';

import type { UserDetailsFormValues } from './types';

export interface IUserDetailsFormProps {
  onSubmit: (values: UserDetailsFormValues) => void;
  userData: User;
}
