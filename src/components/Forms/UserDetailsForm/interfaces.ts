import type { WithModalProps } from 'components';
import type { User } from 'pages/Profile/model/types';
import type { EntityTypes } from 'enums/EntityTypes';

import type { UserDetailsFormValues } from './types';

export interface IUserDetailsFormProps<U extends Omit<User, 'country'> & { country: number }>
  extends WithModalProps {
  onSubmit: (values: UserDetailsFormValues) => void;
  userData: U;
  loading: boolean;
  targetId?: number;
  entityType?: EntityTypes;
  onClearGlobalErrors?: () => void;
  onClearValidationErrors?: () => void;
}
