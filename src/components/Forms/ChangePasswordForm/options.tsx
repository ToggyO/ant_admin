import { commonFormOptions } from '../common-options';

const { password, confirmPassword } = commonFormOptions;

const formOptions = {
  password,
  confirmPassword: confirmPassword('password'),
};

export default formOptions;
