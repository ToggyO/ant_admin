import { UserRoles } from 'enums/UserRoles';

import { commonFormOptions } from '../common-options';

const { name, email } = commonFormOptions;

const formOptions = {
  name,
  email,
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
