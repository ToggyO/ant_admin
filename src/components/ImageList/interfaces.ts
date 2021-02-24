import type { AvatarResources } from 'services/user/types';

export interface IImageListProps {
  avatarsList: AvatarResources[];
}

export interface IImageListItemProps {
  src: string;
}
