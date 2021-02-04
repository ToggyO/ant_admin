/**
 * Description: API Token helpers
 */

import { stringify } from 'querystring';

import { history } from 'umi';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants';

import { getFromLocalState, removeFromLocalState, writeToLocalState } from '../storage';
import { ROUTES } from '../../../config/constants';

export function writeTokens(accessToken: string, refreshToken: string, rememberMe?: boolean): void {
  writeToLocalState(ACCESS_TOKEN, accessToken, rememberMe);
  writeToLocalState(REFRESH_TOKEN, refreshToken, rememberMe);
}

export function clearTokens(): void {
  removeFromLocalState(ACCESS_TOKEN);
  removeFromLocalState(REFRESH_TOKEN);
}

export function checkTokens(): boolean {
  const accessToken = getFromLocalState(ACCESS_TOKEN);
  const refreshToken = getFromLocalState(REFRESH_TOKEN);
  return !(!accessToken || !refreshToken);
}

/**
 * Log out and save the current url
 */
export const signOutRedirect = () => {
  const { query } = history.location;
  // @ts-ignore
  const { redirect } = query;
  // Note: There may be security issues, please note
  if (window.location.pathname !== ROUTES.AUTH.SIGN_IN && !redirect) {
    history.replace({
      pathname: ROUTES.AUTH.SIGN_IN,
      search: stringify({
        redirect: window.location.href,
      }),
    });
  }
};
