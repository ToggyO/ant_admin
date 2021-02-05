/**
 * Description: Academics module DVA model effects
 */

import type { IAcademicsEffects } from './interfaces';

export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *getList({ payload }, { call, put }) {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *getDetails({ payload }, { call, put }) {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *editDetails({ payload }, { call, put }) {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *remove({ payload }, { call, put }) {},
} as IAcademicsEffects;
