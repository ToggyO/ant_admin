import type { FormInstance } from 'antd/lib/form';
import type { ShowUploadListInterface } from 'antd/lib/upload/interface';
import type { UploadListType } from 'antd/lib/upload/interface';

export interface IImageUploaderComponentProps<T extends Record<string, any>> {
  externalFormInstance: FormInstance<T>;
  listType?: UploadListType;
  showUploadList?: boolean | ShowUploadListInterface;
  [key: string]: any;
}
