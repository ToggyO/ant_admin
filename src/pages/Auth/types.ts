/**
 * Description: Auth module types
 */

export type AuthCredentialsDTO = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type LoginFormState = AuthCredentialsDTO & {
  submit: unknown;
};

export type RestorePasswordDTO = {
  email: string;
};

export type ResetPasswordDTO = {
  password: string;
  pinCode: string;
};
