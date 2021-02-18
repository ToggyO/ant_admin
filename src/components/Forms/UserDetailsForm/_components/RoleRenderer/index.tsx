import React from 'react';
import { Alert } from 'antd';

import { USER_ROLES } from '@/constants';
import { UserRoles } from 'enums/UserRoles';

export const RoleRenderer: React.FC<{ role: UserRoles }> = ({ role }) => {
  let message: string;
  let type: 'success' | 'info' | 'warning' | 'error';
  switch (role) {
    case UserRoles.Admin:
      message = USER_ROLES.ADMIN;
      type = 'success';
      break;
    case UserRoles.Academic:
      message = USER_ROLES.ACADEMIC;
      type = 'info';
      break;
    case UserRoles.Learner:
      message = USER_ROLES.LEARNER;
      type = 'warning';
      break;
    default:
      message = USER_ROLES.NO_ROLE;
      type = 'error';
      break;
  }
  return <Alert message={message} type={type} />;
};
