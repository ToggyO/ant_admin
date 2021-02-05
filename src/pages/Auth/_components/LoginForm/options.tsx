import { UserOutlined, LockTwoTone } from '@ant-design/icons';

export const formComponentsProps = {
  email: {
    props: {
      size: 'large',
      placeholder: 'Email',
      prefix: <UserOutlined className="input-prefix-icon" />,
    },
    // rules: [
    //   {
    //     required: true,
    //     message: 'Login is required',
    //   },
    //   {
    //     pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    //     message: 'Login is invalid ',
    //   },
    // ],
  },
  password: {
    props: {
      size: 'large',
      placeholder: 'Password',
      prefix: <LockTwoTone className="input-prefix-icon" />,
    },
    // rules: [
    //   {
    //     required: true,
    //     message: 'Password is required',
    //   }
    // ],
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
