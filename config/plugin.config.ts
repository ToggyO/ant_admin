import * as IWebpackChainConfig from 'webpack-chain';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const webpackPlugin = (config: IWebpackChainConfig) => {
  if (
    process.env.ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site' ||
    process.env.NODE_ENV !== 'production'
  ) {
    config.plugin('fork-ts-checker-webpack-plugin').use(new ForkTsCheckerWebpackPlugin({
      async: true,
      checkSyntacticErrors: true,
      useTypescriptIncrementalApi: false,
      // eslint: true,
    }));
  }
};
