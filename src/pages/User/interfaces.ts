import type { Effect } from 'umi';
// import type { AnyAction } from 'redux';

export interface Tokens {
  accessToken?: string;
  accessTokenExpire?: Date;
  refreshToken?: string;
}

export interface LoginModelState {
  authInfo: Tokens;
  // FIXME:
  user: object;
  errors: [];
}

export interface LoginModelType {
  namespace: 'auth';
  state: LoginModelState;
  effects: {
    login: Effect;
    // sendRecoveryLink: Effect;
    // setPassword: Effect;
    // logout: Effect;
  };
  reducers: {
    // saveLoginData: Reducer<Omit<LoginModelState, 'errors'>>;
    // sendRecoveryLinkEnd: Reducer<Pick<LoginModelState, 'status'>>;
    // // setPasswordSuccess: Reducer<Pick<LoginModelState, 'status'>>;
    // putErrors: Reducer<Pick<LoginModelState, 'errors'>, AnyAction>;
    // clearLoginErrors: Reducer<Pick<LoginModelState, 'errors'>>;
  };
}
