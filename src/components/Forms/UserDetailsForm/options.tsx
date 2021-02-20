import { ERROR_MESSAGES } from '@/constants';
import { UserRoles } from 'enums/UserRoles';

import { commonFormOptions } from '../common-options';

const { name, email, about, university } = commonFormOptions;

const formOptions = {
  name,
  email,
  about,
  university,
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
  country: {
    props: {
      size: 'large',
      placeholder: 'Choose country',
      showSearch: true,
      // labelInValue: true,
      filterOption: (input: string, option: { children: string }) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      filterSort: (optionA: { children: string }, optionB: { children: string }) =>
        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase()),
    },
    rules: [
      {
        required: true,
        message: ERROR_MESSAGES.COUNTRY.REQUIRED,
      },
    ],
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
