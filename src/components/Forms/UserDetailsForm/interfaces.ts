import type { ActionCreator } from 'models/connect';
import type { User } from 'pages/Profile/model/types';

import type { UserDetailsFormValues } from './types';

export interface IUserDetailsFormProps {
  onSubmit: (values: UserDetailsFormValues) => void;
  userData: User;
  openModal: ActionCreator<string>;
  closeModal: ActionCreator<string>;
}
