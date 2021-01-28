/**
 * Description: API Token helpers
 */

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants';

import { getFromLocalState, removeFromLocalState, writeToLocalState } from '../storage';

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

  if (!accessToken || !refreshToken) {
    clearTokens();
    return false;
  }

  return true;
}
