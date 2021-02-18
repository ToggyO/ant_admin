/**
 * Description: Common application interfaces
 */

import type { UploadFile } from 'antd/lib/upload/interface';

export interface IAntUploadedFiles {
  file: UploadFile;
  fileList: UploadFile[];
  [key: string]: any;
}
