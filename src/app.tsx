import React from 'react';
import { history } from 'umi';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';

import { RightContent, Footer } from 'components';
import { HttpClientConfig } from 'services/config';

// import { queryCurrent } from './services/user';
import defaultSettings from '../config/defaultSettings';

import AppLayout from './AppLayout';

export const initialStateConfig = {
  loading: <PageLoading />,
};

export async function getInitialState(): Promise<{
  settings?: LayoutSettings;
  currentUser?: API.CurrentUser;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () =>
    // try {
    //   const currentUser = await queryCurrent();
    //   return currentUser;
    // } catch (error) {
    //   history.push('/user/login');
    // }
    undefined;
  // 如果是登录页面，不执行
  if (history.location.pathname !== '/user/login') {
    // const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      // currentUser,
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
    // const { location } = history;
    // 如果没有登录，重定向到 login
    // if (!initialState?.currentUser && location.pathname !== '/user/login') {
    //   history.push('/user/login');
    // }
  },
  menuHeaderRender: undefined,
  childrenRender: (children) => <AppLayout>{children}</AppLayout>,
  // 自定义 403 页面
  // unAccessible: <div>unAccessible</div>,
  ...initialState?.settings,
});

export const request: RequestConfig = new HttpClientConfig();
