import { commonFormOptions } from '../common-options';

const { password, confirmPassword, submit } = commonFormOptions;

const formOptions = {
  password,
  confirmPassword: confirmPassword('password'),
  submit,
};

export default formOptions;
