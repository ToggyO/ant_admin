import { commonFormOptions } from '../common-options';

const { name, surname, email, password, confirmPassword } = commonFormOptions;

const formOptions = {
  name,
  surname,
  email,
  password,
  confirmPassword: confirmPassword('password'),
};

export default formOptions;
