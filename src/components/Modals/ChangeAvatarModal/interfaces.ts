import type { AvatarResources } from 'services/user/types';

import type { ICommonModalFormProps } from '../interfaces';

export interface IChangeAvatarModalProps extends ICommonModalFormProps {
  // FIXME:
  avatars: AvatarResources[];
  onSubmit: () => any;
  loading: boolean;
}
