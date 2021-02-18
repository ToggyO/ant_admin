declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';

// google analytics interface
type GAFieldsObject = {
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  eventValue?: number;
  nonInteraction?: boolean;
};

type Window = {
  ga: (command: 'send', hitType: 'event' | 'pageview', fieldsObject: GAFieldsObject | string) => void;
  reloadAuthorized: () => void;
};

declare let ga: () => void;

declare type FunctionType = (...args: any[]) => any;

declare type AntProInitialState = {
  currentUser?: User;
  settings?: LayoutSettings;
};

// preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
declare let ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: 'site' | undefined;

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;
declare const NODE_ENV: 'development' | 'staging' | 'production';
declare const BASE_API_URL: string;
declare const BASE_API_STORAGE_URL: string;
declare const APP_PREFIX: string;
