import type { UserRoles } from 'enums/UserRoles';

export type UserDetailsFormValues = {
  id: number;
  role: UserRoles;
  name: string;
  surname: string;
  email: string;
  avatar: string;
  subscription: string;
};
