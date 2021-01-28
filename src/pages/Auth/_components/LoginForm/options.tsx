import { UserOutlined, LockTwoTone } from '@ant-design/icons';

export const formComponentsProps = {
  email: {
    props: {
      size: 'large',
      placeholder: 'Email',
      prefix: <UserOutlined className="input-prefix-icon" />,
    },
  },
  password: {
    props: {
      size: 'large',
      placeholder: 'Password',
      prefix: <LockTwoTone className="input-prefix-icon" />,
    },
  },
  rememberMe: {
    props: {
      text: 'Remember me',
    },
  },
  submit: {
    props: {
      type: 'primary',
      htmlType: 'submit',
      size: 'large',
    },
  },
};

export default formComponentsProps;
