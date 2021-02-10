import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { ERROR_MESSAGES } from '@/constants';

const { LOGIN, PASSWORD } = ERROR_MESSAGES;

export const commonFormOptions = {
  email: {
    props: {
      size: 'large',
      placeholder: 'Email',
      prefix: <UserOutlined className="input-prefix-icon" />,
    },
    rules: [
      {
        required: true,
        message: LOGIN.REQUIRED,
      },
      {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: LOGIN.REQUIRED,
      },
    ],
  },
  password: {
    props: {
      size: 'large',
      placeholder: 'Password',
      maxLength: 30,
      prefix: <LockOutlined className="input-prefix-icon" />,
    },
    rules: [
      {
        required: true,
        message: ' ',
      },
      {
        validator: (_: any, value: string) => {
          if (!value) {
            return Promise.reject(PASSWORD.COMMON.REQUIRED);
          }

          if (value.length < 6 || value.length > 30) {
            return Promise.reject(PASSWORD.COMMON.LENGTH);
          }

          const condition = /^[0-9a-zA-Z~!@#$%^&*_\-+=`|(){}[\]:;"'<>,.?/]+$/.test(value);
          if (condition) {
            return Promise.resolve();
          }

          return Promise.reject(PASSWORD.COMMON.INVALID_CONTENT);
        },
      },
    ],
  },
  submit: {
    props: {
      type: 'primary',
      htmlType: 'submit',
      size: 'large',
    },
  },
};
