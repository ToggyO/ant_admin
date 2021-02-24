/**
 * Description: User module API types
 */

import type { EntityTypes } from 'enums/EntityTypes';

export type AvatarResources = {
  id: number;
  path: string;
};

export type UploadAvatarDTO = {
  file: File;
  entityType: EntityTypes;
  avatarId?: number;
  targetId?: number;
};
