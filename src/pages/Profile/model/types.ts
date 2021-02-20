/**
 * Description: Profile module DVA model types
 */

import type { UserRoles } from 'enums/UserRoles';
import type { Country } from 'models/global/types';
import type { AvatarResources } from 'services/user/types';

export type User = {
  id: number;
  name: string;
  email: string;
  role: UserRoles;
  country: Country;
  university: string;
  avatar: string | null;
  avatars: AvatarResources[];
  deleted: boolean;
  // FIXME: Check type
  subscription?: string;
};

export type CurrentUser = Omit<User, 'country'> & { country: number };
