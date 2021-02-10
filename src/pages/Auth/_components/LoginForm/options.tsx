import { LockTwoTone } from '@ant-design/icons';

import { commonFormOptions } from 'components';
import { ERROR_MESSAGES } from '@/constants';

const { email, submit } = commonFormOptions;

const rules = [...email.rules].slice(1, email.rules.length);

export const formComponentsProps = {
  email: {
    ...email,
    rules: [
      ...rules,
      {
        required: true,
        message: ERROR_MESSAGES.LOGIN.REQUIRED,
      },
    ],
  },
  password: {
    props: {
      size: 'large',
      placeholder: 'Password',
      prefix: <LockTwoTone className="input-prefix-icon" />,
    },
    rules: [
      {
        required: true,
        message: 'Password is required',
      },
    ],
  },
  rememberMe: {
    props: {
      text: 'Remember me',
    },
  },
  submit,
};

export default formComponentsProps;
