import path from 'path';
import fs from 'fs';

import * as IWebpackChainConfig from 'webpack-chain';

const appDirectory = fs.realpathSync(process.cwd());
export const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

export const webpackPlugin = (config: IWebpackChainConfig) => {
  config.resolve.alias.set('assets', resolveApp('src/assets'));
  config.resolve.alias.set('components', resolveApp('src/components'));
  config.resolve.alias.set('config', resolveApp('config'));
  config.resolve.alias.set('constants', resolveApp('src/constants'));
  config.resolve.alias.set('enums', resolveApp('src/enums'));
  config.resolve.alias.set('locales', resolveApp('src/locales'));
  config.resolve.alias.set('models', resolveApp('src/models'));
  config.resolve.alias.set('pages', resolveApp('src/pages'));
  config.resolve.alias.set('services', resolveApp('src/services'));
  config.resolve.alias.set('utils', resolveApp('src/utils'));
};
