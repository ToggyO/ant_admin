import type { UserRoles } from 'enums/UserRoles';

export type UserDetailsFormValues = {
  name: string;
  email: string;
  role: UserRoles;
  file: any;
  subscription: string;
};
