import React, { PropsWithChildren, useCallback, useState } from 'react';
import { useDispatch } from 'dva';
import { Button, Row, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { UploadFile } from 'antd/lib/upload/interface';
import 'antd/es/slider/style';

import { AnimationWrapper } from 'components';

import type { IImageUploaderComponentProps } from './interfaces';

import styles from './index.less';

export function AvatarUploader({
  children,
  uploadActionCreator,
  validateFileFunc,
  listType = 'picture',
  showUploadList = true,
  extraPayload = {},
  ...rest
}: PropsWithChildren<IImageUploaderComponentProps>) {
  const dispatch = useDispatch();
  const [uploaderState, setUploaderState] = useState<UploadFile[]>([]);

  const beforeCrop = useCallback((file: File) => validateFileFunc(file), [validateFileFunc]);

  const handleConfirm = useCallback(() => {
    if (uploaderState.length) {
      dispatch(
        uploadActionCreator({
          ...extraPayload,
          file: uploaderState[0].originFileObj,
        }),
      );
      setUploaderState([]);
    }
  }, [extraPayload, uploaderState, dispatch, uploadActionCreator]);

  return (
    <>
      <ImgCrop shape="round" grid rotate beforeCrop={beforeCrop}>
        <Upload
          className={styles.uploader}
          fileList={uploaderState}
          listType={listType}
          showUploadList={showUploadList}
          onChange={(e) => setUploaderState(e.fileList)}
          {...rest}
        >
          {children}
        </Upload>
      </ImgCrop>
      <AnimationWrapper
        show={uploaderState.length > 0}
        showAnimName="fade_in"
        hideAnimName="fade_out"
        restAnimationProps={{ duration: '0.2s' }}
      >
        <Row justify="center" className={styles.confirm}>
          <Button type="primary" htmlType="button" onClick={handleConfirm}>
            Confirm
          </Button>
        </Row>
      </AnimationWrapper>
    </>
  );
}
