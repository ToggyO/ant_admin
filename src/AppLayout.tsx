import React, { useEffect, memo } from 'react';
import type { Dispatch } from 'umi';
import { useModel } from 'umi';
import { connect, useSelector } from 'umi';

import type { ConnectState } from 'models/connect';
import { PROFILE } from 'pages/Profile/model/constants';
import type { User } from 'pages/Profile/model/types';

import { isObjectEmpty } from 'utils/utils';

const { getNamespace } = PROFILE;

export interface IAppLayoutProps {
  children: React.ReactNode;
  dispatch?: Dispatch;
}

const AppLayout: React.FC<IAppLayoutProps> = memo(({ children, dispatch }) => {
  const { initialState } = useModel('@@initialState');
  const user = useSelector<ConnectState, User>((state) => state.profile.user);

  // FIXME: delete
  useEffect(() => console.log('dispatch is changed'), [dispatch]);
  useEffect(() => {
    if (initialState?.currentUser && isObjectEmpty(user) && dispatch) {
      // FIXME: delete
      console.log('set user');
      dispatch({
        type: getNamespace(PROFILE.ACTIONS.SAVE_USER_INFO),
        payload: initialState?.currentUser,
      });
    }
  }, [dispatch, initialState?.currentUser, user]);
  return <div className="app-layout">{children}</div>;
});

export default connect(null, null)(AppLayout);
