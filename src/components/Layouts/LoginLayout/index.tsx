/**
 * Description: Components - LoginLayout
 */

import React from 'react';
import { Link } from 'umi';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { getPageTitle } from '@ant-design/pro-layout';

import { AppLogo } from 'components';

import { Footer } from '../../index';

import type { ILoginLayoutProps } from './types';

import styles from './index.less';

const LoginLayout: React.FC<ILoginLayoutProps> = (props) => {
  const { children, location } = props;
  const title = getPageTitle({
    pathname: location.pathname,
    // breadcrumb,
    // formatMessage,
    ...props,
  });

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <AppLogo className={styles.logo} />
              </Link>
            </div>
            <div className={styles.desc}>Welcome to AcAudio!</div>
          </div>
          <div className={styles.children}>{children}</div>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default LoginLayout;
