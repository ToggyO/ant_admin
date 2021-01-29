import { parse } from 'qs';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};

/**
 * Checking if value is undefined
 */
export const isUndefined = (obj: any): obj is undefined => typeof obj === 'undefined';

/**
 * Checking if typeof value is function
 */
export const isFunction = (fn: any): boolean => typeof fn === 'function';

/**
 * Checking if typeof value is string
 */
export const isString = (fn: any): fn is string => typeof fn === 'string';

/**
 * Checking if value function is an object constructor function
 */
export const isConstructor = (fn: any): boolean => fn === 'constructor';

/**
 * Checking if value is null or undefined
 */
export const isNil = (obj: any): obj is null | undefined => isUndefined(obj) || obj === null;

/**
 * Checking if typeof value is symbol
 */
export const isSymbol = (fn: any): fn is symbol => typeof fn === 'symbol';

/**
 * Checking if the value is not empty
 */
export const isEmpty = (val: any): boolean => val === undefined || val == null || val.length <= 0;

/**
 * Checking if object is empty
 */
export function isObjectEmpty(object: Record<any, any>): boolean {
  if (typeof object === 'undefined') {
    return false;
  }
  if (Object.keys(object).length) {
    return false;
  }
  return true;
}

/**
 * Lodash.get function implementation
 * Lets you safely retrieve a property of an object
 * https://gist.github.com/harish2704/d0ee530e6ee75bad6fd30c98e5ad9dab
 */
export function getProp<T>(object: Record<string, any>, keys: string | string[], defaultVal?: any): T {
  const keysArray = Array.isArray(keys) ? keys : keys.split('.');
  const result = object[keysArray[0]];
  if (result && keysArray.length > 1) {
    return getProp(result, keysArray.slice(1));
  }

  if (object === undefined) {
    return defaultVal;
  }

  return result;
}

/**
 * Bind class member to instance (use in constructor)
 */
export function autobind(instance: Record<string, any>, proto?: Record<string, any>): void {
  let prototype = proto;
  if (!prototype) {
    prototype = Object.getPrototypeOf(instance);
  }
  const propertyNames = Object.getOwnPropertyNames(prototype);
  // eslint-disable-next-line no-restricted-syntax
  for (const name of propertyNames) {
    const descriptor = Object.getOwnPropertyDescriptor(prototype, name);
    if (descriptor?.get || descriptor?.set) {
      return;
    }
    if (!isConstructor(name) && isFunction(prototype![name])) {
      instance[name] = prototype![name].bind(instance);
    }
  }
}

/**
 * Create pathname for redirect
 */
export function getRedirectUrl() {
  const urlParams = new URL(window.location.href);
  const params = parse(window.location.href.split('?')[1]);
  let { redirect } = params as { redirect: string };
  if (redirect) {
    const redirectUrlParams = new URL(redirect);
    if (redirectUrlParams.origin === urlParams.origin) {
      redirect = redirect.substr(urlParams.origin.length);
      if (redirect.match(/^\/.*#/)) {
        redirect = redirect.substr(redirect.indexOf('#') + 1);
      }
    }
    // else {
    //   window.location.href = '/';
    //   return;
    // }
  }
  return redirect;
}
