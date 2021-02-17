import React from 'react';
import { CodeOutlined } from '@ant-design/icons';

import { commonFormOptions } from '../common-options';

const { password, confirmPassword, submit } = commonFormOptions;

const formOptions = {
  pinCode: {
    props: {
      size: 'large',
      placeholder: 'Pin code',
      prefix: <CodeOutlined className="input-prefix-icon" />,
    },
    hasFeedback: true,
    rules: [
      {
        required: true,
        message: 'Pin code is required',
      },
    ],
  },
  password,
  confirmPassword: confirmPassword('password'),
  submit,
};

export default formOptions;
