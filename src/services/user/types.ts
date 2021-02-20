/**
 * Description: User module API types
 */

export type AvatarResources = {
  id: number;
  path: string;
};

export type UploadAvatarDTO = {
  file: File;
  avatarId?: number;
  targetId?: number;
};
