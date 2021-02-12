/**
 * Description: Academics module DVA model types
 */

import type { User } from 'pages/Profile/model/types';

export type Academic = User & {
  trialStarted: boolean;
  about?: string;
  university?: string;
  // FIXME:
  paper?: any[];
};

export type AcademicTableItem = {
  id: number;
  fullName: string;
  email: string;
  trialStarted: boolean;
};

export type CreateAcademicDTO = {
  name: string;
  surname: string;
  email: string;
  // FIXME: (temporary) delete
  password: string;
};
