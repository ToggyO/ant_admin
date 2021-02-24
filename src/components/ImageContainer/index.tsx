import React, { useEffect, useState } from 'react';
import { Avatar, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import type { IImageContainerProps } from './interfaces';

import styles from './index.less';

export const ImageContainer: React.FC<IImageContainerProps> = ({ src, globalLoading }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => setLoading(globalLoading), [globalLoading]);
  return (
    <div className={styles.wrapper}>
      {src ? (
        <Spin size="small" spinning={loading}>
          <div className={styles.image_container}>
            <img
              src={src}
              alt="mediafile"
              onLoad={() => setLoading(false)}
              style={{
                backgroundColor: loading ? '#f2f2f2' : 'none',
                opacity: loading ? 0.15 : 1,
              }}
            />
          </div>
        </Spin>
      ) : (
        <Avatar size={128} icon={<UserOutlined />} />
      )}
    </div>
  );
};
