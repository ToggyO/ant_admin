import type { User } from 'pages/Profile/model/types';

export interface ISubscriptionProps {
  userData: User;
  [key: string]: unknown;
}
