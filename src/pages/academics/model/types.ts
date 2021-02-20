/**
 * Description: Academics module DVA model types
 */

import type { User } from 'pages/Profile/model/types';

export type Academic = User & {
  about?: string;
  // FIXME:
  paper?: any[];
};

export type AcademicTableItem = {
  id: number;
  name: string;
  email: string;
  country: string;
  university: string;
  deleted: boolean;
};

export type CreateAcademicDTO = {
  name: string;
  email: string;
};

export type EditAcademicDTO = {
  targetId: number;
  name: string;
  university: string;
  about: string;
};
