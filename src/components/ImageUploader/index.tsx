import React, { useEffect, useState, PropsWithChildren } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

import type { IImageUploaderComponentProps } from './interfaces';

import styles from './index.less';
import 'antd/es/slider/style';

export function ImageUploader<T extends Record<string, any>>({
  children,
  externalFormInstance,
  listType = 'picture',
  showUploadList = true,
  ...rest
}: PropsWithChildren<IImageUploaderComponentProps<T>>) {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (file !== null) {
      externalFormInstance.setFieldsValue({ ...externalFormInstance.getFieldsValue(), file } as any);
    }
  }, [file, externalFormInstance]);

  return (
    <ImgCrop shape="round" grid rotate>
      <Upload
        className={styles.uploader}
        listType={listType}
        showUploadList={showUploadList}
        onChange={(e) => setFile(e.file.originFileObj as File)}
        {...rest}
      >
        {children}
      </Upload>
    </ImgCrop>
  );
}
