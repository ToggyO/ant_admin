/**
 * Description: Helpers for operating of local storage
 */

export function writeToLocalState<T = any>(key: string, state: T, rememberMe = true): void {
  try {
    if (!rememberMe) {
      sessionStorage.setItem(`${APP_PREFIX}_${key}`, JSON.stringify(state));
      return;
    }
    localStorage.setItem(`${APP_PREFIX}_${key}`, JSON.stringify(state));
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export function getFromLocalState<T>(key: string, defaultValue?: T): T {
  let state: T;
  try {
    if (sessionStorage.length) {
      state = JSON.parse(sessionStorage.getItem(`${APP_PREFIX}_${key}`) as string);
    } else {
      state = JSON.parse(localStorage.getItem(`${APP_PREFIX}_${key}`) as string);
    }
  } catch (e) {
    state = defaultValue as T;
  }
  return state;
}

export function clearLocalState(key: string): void {
  try {
    localStorage.removeItem(`${APP_PREFIX}_${key}`);
    sessionStorage.removeItem(`${APP_PREFIX}_${key}`);
  } catch (e) {
    console.log(e);
    throw e;
  }
}
