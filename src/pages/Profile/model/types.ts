/**
 * Description: Profile module DVA model types
 */

import type { UserRoles } from 'enums/UserRoles';

export type User = {
  id: number;
  name: string;
  email: string;
  role: UserRoles;
  subscription?: string;
};

export type CurrentUser = User & {
  avatar: string;
};
