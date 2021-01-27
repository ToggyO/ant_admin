/**
 * Description: Auth module model types
 */

export type AuthDTO = {
  accessToken: string;
  refreshToken: string;
};

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
