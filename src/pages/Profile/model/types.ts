/**
 * Description: Profile module DVA model types
 */

export type User = {
  id: number;
  role: number;
  name: string;
  surname: string;
  email: string;
  avatar: string;
  // TODO: пофиксить на бэке
  subscribtion: string;
};
