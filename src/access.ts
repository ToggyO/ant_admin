import { Accesses } from 'config/accesses.enum';
import type { User } from 'pages/Profile/model/types';
import { UserRoles } from 'enums/UserRoles';

export default function access(initialState: { currentUser?: User | undefined }) {
  const { currentUser } = initialState || {};
  return {
    [Accesses.CanAdmin]: currentUser && currentUser.role === UserRoles.Admin,
  };
}
