import type { Action } from 'umi';

import type { ActionPayload } from 'models/connect';

export interface IImageUploaderComponentProps {
  uploadActionCreator: (...args: any[]) => ActionPayload<any> | Action;
  validateFileFunc: (file: File) => boolean;
  extraPayload?: Record<string, any>;
  [key: string]: any;
}
