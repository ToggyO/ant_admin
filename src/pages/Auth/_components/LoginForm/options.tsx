import { LockTwoTone } from '@ant-design/icons';

import { commonFormOptions } from 'components';

const { email, submit } = commonFormOptions;

export const formComponentsProps = {
  email,
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
