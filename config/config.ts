// https://umijs.org/config/
import { defineConfig } from 'umi';

import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
import { env } from './env';
import { webpackPlugin } from './plugin.config';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'AcAudio',
    // Set to true, if you need localization
    locale: false,
    siderWidth: 208,
    ...defaultSettings,
  },
  // Configure object, if you need localization
  locale: false,
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Use to define environment variables from process.env to your application
  define: {
    ...env,
  },
  forkTSChecker: {
    async: true,
    typescript: true,
  },
  chainWebpack: webpackPlugin,
});
