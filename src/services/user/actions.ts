/**
 * Description: User module API actions
 */

import { COMMON_ACTION_TYPES } from 'models/common.constants';
import type { ActionPayload } from 'models/connect';

import type { UploadAvatarDTO } from './types';

export const uploadAvatarActionCreator = (
  namespace: string,
  dto: UploadAvatarDTO,
): ActionPayload<UploadAvatarDTO> => ({
  type: `${namespace}/${COMMON_ACTION_TYPES.EFFECTS.UPLOAD_AVATAR}`,
  payload: dto,
});
