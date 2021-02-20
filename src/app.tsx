/**
 * Description: Application setting for UmiJs
 * UmiJs package read this file and use `getInitialState`,
 * `layout` asn `request` automatically
 */

import React from 'react';
import { history } from 'umi';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { PageLoading } from '@ant-design/pro-layout';

import { ROUTES } from 'config/constants';
import { RightContent, Footer } from 'components';
import { HttpClientConfig } from 'services/config';

import { AppLayout } from 'components';
import { checkTokens } from 'services/auth';
import { fetchCurrentUser } from 'services/user/service';
import { getCountriesList } from 'models/global/service';

import defaultSettings from '../config/defaultSettings';

export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * Initial application state
 */
export async function getInitialState(): Promise<AntProInitialState> {
  const fetchUserInfo = async () => {
    try {
      const { data } = await fetchCurrentUser();
      return data.user;
    } catch (error) {
      const {
        location: { pathname },
      } = history;
      const redirect = pathname.includes(ROUTES.AUTH.ROOT) ? pathname : ROUTES.AUTH.SIGN_IN;
      history.push(redirect);
    }
    return undefined;
  };
  if (history.location.pathname !== ROUTES.AUTH.SIGN_IN) {
    const currentUser = await fetchUserInfo();
    const countries = await getCountriesList();
    return {
      currentUser,
      countries: countries.data.items || [],
      settings: defaultSettings,
    };
  }
  return {
    settings: defaultSettings,
  };
}

/**
 * Layout settings
 */
export const layout: RunTimeLayoutConfig = ({ initialState }) => ({
  rightContentRender: () => <RightContent />,
  disableContentMargin: false,
  footerRender: () => <Footer />,
  onPageChange: () => {
    const { location } = history;
    const isTokens = checkTokens();
    if (isTokens && location.pathname.includes(ROUTES.AUTH.ROOT)) {
      history.push('/');
    }
    if (!isTokens && !location.pathname.includes(ROUTES.AUTH.ROOT)) {
      history.push(ROUTES.AUTH.SIGN_IN);
    }
  },
  childrenRender: (children) => <AppLayout>{children}</AppLayout>,
  ...initialState?.settings,
});

/**
 * UmiJs `request` configuration
 * Usage:
 *  .ts - import { request } from 'umi';
 *  .tsx - import { useRequest } from 'umi';
 */
export const request: RequestConfig = new HttpClientConfig();
