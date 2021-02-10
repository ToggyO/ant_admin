import { LockOutlined } from '@ant-design/icons';
import type { FormInstance, RuleObject } from 'antd/es/form';

import { ERROR_MESSAGES } from '@/constants';

import { commonFormOptions } from '../common-options';

const { password, confirmPassword } = commonFormOptions;
const { PASSWORD } = ERROR_MESSAGES;

const formOptions = {
  oldPassword: {
    props: {
      size: 'large',
      placeholder: 'Old password',
      prefix: <LockOutlined className="input-prefix-icon" />,
    },
    dependencies: ['newPassword'],
    rules: [
      {
        required: true,
        message: ' ',
      },
      ({ getFieldValue }: FormInstance): RuleObject => ({
        validator: (_: any, value: string) => {
          if (!value) {
            return Promise.reject(PASSWORD.OLD.REQUIRED);
          }

          if (value === getFieldValue('newPassword')) {
            return Promise.reject(PASSWORD.OLD.SHOULD_MATCH);
          }

          return Promise.resolve();
        },
      }),
    ],
  },
  newPassword: {
    ...password,
    props: {
      ...password.props,
      placeholder: 'New password',
    },
  },
  confirmPassword: confirmPassword('newPassword'),
};

export default formOptions;
