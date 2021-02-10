import { ERROR_MESSAGES } from '@/constants';

import { commonFormOptions } from '../common-options';

const { email, submit } = commonFormOptions;

const rules = [...email.rules].slice(1, email.rules.length);

const formOptions = {
  email: {
    ...email,
    rules: [
      ...rules,
      {
        required: true,
        message: ERROR_MESSAGES.EMAIL.REQUIRED,
      },
    ],
  },
  submit,
};

export default formOptions;
