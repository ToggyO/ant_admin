/**
 * Description: Learners module DVA model types
 */

import type { User } from 'pages/Profile/model/types';

export type Learner = User & {
  trialStarted: boolean;
  university?: string;
};

export type LearnerTableItem = {
  id: number;
  name: string;
  email: string;
  trialStarted: boolean;
};

export type EditLearnerDTO = {
  targetId: number;
  name: string;
  file?: any;
  // FIXME: check
  email?: string;
};
