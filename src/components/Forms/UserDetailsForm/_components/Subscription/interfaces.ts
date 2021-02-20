import type { User } from 'pages/Profile/model/types';

export interface ISubscriptionProps {
  userData: Omit<User, 'country'> & { country: number };
  [key: string]: unknown;
}
