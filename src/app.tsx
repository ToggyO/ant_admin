import React from 'react';
import { history } from 'umi';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';

import { ROUTES } from 'config/constants';
import { RightContent, Footer } from 'components';
import { HttpClientConfig } from 'services/config';
import { fetchCurrentUser } from 'services/user';
import type { User } from 'pages/Profile/model/types';

import defaultSettings from '../config/defaultSettings';

import AppLayout from './AppLayout';

export const initialStateConfig = {
  loading: <PageLoading />,
};

// FIXME: change response payload
// FIXME: нести роуты в конфиг
export async function getInitialState(): Promise<{
  settings?: LayoutSettings;
  currentUser?: User;
  fetchUserInfo?: () => Promise<User | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const { user } = await fetchCurrentUser();
      return user;
    } catch (error) {
      history.push(ROUTES.AUTH.SIGN_IN);
    }
    return undefined;
  };
  if (history.location.pathname !== ROUTES.AUTH.SIGN_IN) {
    const { user } = await fetchCurrentUser();
    return {
      fetchUserInfo,
      currentUser: user,
      settings: defaultSettings,
    };
  }

  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => ({
  rightContentRender: () => <RightContent />,
  disableContentMargin: false,
  footerRender: () => <Footer />,
  onPageChange: () => {
    const { location } = history;
    if (!initialState?.currentUser && location.pathname !== ROUTES.AUTH.SIGN_IN) {
      history.push(ROUTES.AUTH.SIGN_IN);
    }
  },
  menuHeaderRender: undefined,
  childrenRender: (children) => <AppLayout>{children}</AppLayout>,
  // 自定义 403 页面
  // unAccessible: <div>unAccessible</div>,
  ...initialState?.settings,
});

export const request: RequestConfig = new HttpClientConfig();
