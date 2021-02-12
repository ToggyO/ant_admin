export type CreateUserFormValues = {
  name: string;
  email: string;
  // FIXME: delete, when password would be generated on backend
  password: string;
  confirmPassword: string;
};
