/**
 * Description: Components - LoginLayout
 */

import React, { useCallback } from 'react';
import { Link } from 'umi';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { getPageTitle } from '@ant-design/pro-layout';

import { AppLogo } from 'components';
import { APP_NAME, ROUTES } from 'config/constants';

import { Footer } from '../../index';

import type { ILoginLayoutProps } from './types';

import styles from './index.less';

const LoginLayout: React.FC<ILoginLayoutProps> = (props) => {
  const { children, location } = props;

  const createTitle = useCallback(() => {
    const routePrefixLength = ROUTES.AUTH.ROOT.length;
    const pathname = location.pathname.slice(routePrefixLength + 2, location.pathname.length);
    const firstSymbol = location.pathname[routePrefixLength + 1];
    const firstSymbolToUpperCase = firstSymbol ? firstSymbol.toUpperCase() : '';
    return `${firstSymbolToUpperCase}${pathname.replace('-', ' ')} - ${APP_NAME}`;
  }, [location.pathname]);

  const title = getPageTitle({
    title: createTitle(),
    pathname: location.pathname,
    // breadcrumb,
    // formatMessage,
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
            <div className={styles.desc}>Welcome to {APP_NAME}!</div>
          </div>
          <div className={styles.children}>{children}</div>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default LoginLayout;
