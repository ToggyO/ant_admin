import React from 'react';
import { IdcardTwoTone, MailTwoTone } from '@ant-design/icons';

import { UserRoles } from 'enums/UserRoles';

const formOptions = {
  name: {
    props: {
      size: 'large',
      placeholder: 'Enter name',
      suffix: <IdcardTwoTone />,
    },
    rules: [
      {
        required: true,
        message: 'First name is required',
      },
    ],
  },
  surname: {
    props: {
      size: 'large',
      placeholder: 'Enter surname',
      suffix: <IdcardTwoTone />,
    },
    rules: [
      {
        required: true,
        message: 'Surname is required',
      },
    ],
  },
  email: {
    props: {
      size: 'large',
      disabled: true,
      suffix: <MailTwoTone />,
    },
  },
  role: {
    props: {
      size: 'large',
      selectoptions: [
        {
          key: UserRoles.Admin,
          label: 'Administrator',
        },
        {
          key: UserRoles.Academic,
          label: 'Academic',
        },
        {
          key: UserRoles.Learner,
          label: 'Learner',
        },
      ],
    },
  },
  submit: {
    props: {
      htmlType: 'submit',
      type: 'primary',
      size: 'large',
    },
  },
};

export default formOptions;
