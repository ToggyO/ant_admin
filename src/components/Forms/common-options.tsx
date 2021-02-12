import { LockOutlined, MailTwoTone, IdcardOutlined } from '@ant-design/icons';

import { ERROR_MESSAGES } from '@/constants';
import { FormInstance } from 'antd/es/form';

const { EMAIL, PASSWORD, FIRST_NAME, LAST_NAME } = ERROR_MESSAGES;

export const commonFormOptions = {
  email: {
    props: {
      size: 'large',
      placeholder: 'Email',
      prefix: <MailTwoTone className="input-prefix-icon" />,
    },
    rules: [
      {
        required: true,
        message: EMAIL.REQUIRED,
      },
      {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: EMAIL.INVALID,
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
  confirmPassword: (passwordFieldName: string) => ({
    props: {
      size: 'large',
      placeholder: 'Confirm password',
      prefix: <LockOutlined className="input-prefix-icon" />,
    },
    dependencies: ['newPassword'],
    rules: [
      {
        required: true,
        message: ' ',
      },
      ({ getFieldValue }: FormInstance) => ({
        validator: (_: any, value: string) => {
          if (!value) {
            return Promise.reject(PASSWORD.CONFIRM.REQUIRED);
          }

          if (value !== getFieldValue(passwordFieldName)) {
            return Promise.reject(PASSWORD.CONFIRM.SHOULD_MATCH);
          }

          return Promise.resolve();
        },
      }),
    ],
  }),
  name: {
    props: {
      size: 'large',
      placeholder: 'First name',
      prefix: <IdcardOutlined className="input-prefix-icon" />,
    },
    rules: [
      {
        required: true,
        message: FIRST_NAME.REQUIRED,
      },
    ],
  },
  surname: {
    props: {
      size: 'large',
      placeholder: 'Last name',
      prefix: <IdcardOutlined className="input-prefix-icon" />,
    },
    rules: [
      {
        required: true,
        message: LAST_NAME.REQUIRED,
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
