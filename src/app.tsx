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

import { checkTokens } from 'services/auth';
import { fetchCurrentUser } from 'services/user';

import defaultSettings from '../config/defaultSettings';

import AppLayout from './AppLayout';

export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * Initial application state
 */
// FIXME: нести роуты в конфиг
export async function getInitialState(): Promise<AntProInitialState> {
  const fetchUserInfo = async () => {
    try {
      const { data } = await fetchCurrentUser();
      return data.user;
    } catch (error) {
      history.push(ROUTES.AUTH.SIGN_IN);
    }
    return undefined;
  };
  if (history.location.pathname !== ROUTES.AUTH.SIGN_IN) {
    const currentUser = await fetchUserInfo();
    return {
      currentUser,
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
    if (isTokens && location.pathname === ROUTES.AUTH.SIGN_IN) {
      history.push('/');
    }
    if (!isTokens && location.pathname !== ROUTES.AUTH.SIGN_IN) {
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
