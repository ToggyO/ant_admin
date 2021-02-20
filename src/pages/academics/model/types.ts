/**
 * Description: Academics module DVA model types
 */

import type { User } from 'pages/Profile/model/types';
import type { Country } from 'models/global/types';

export type Academic = User & {
  about?: string;
  // FIXME:
  paper?: any[];
};

export type AcademicTableItem = {
  id: number;
  name: string;
  email: string;
  country: Country;
  university: string;
  deleted: boolean;
};

export type AcademicDetails = Omit<Academic, 'country'> & {
  country: number;
};

export type CreateAcademicDTO = {
  name: string;
  email: string;
};

export type EditAcademicDTO = {
  targetId: number;
  name: string;
  countryId: number;
  university: string;
  about: string;
};
