import React, { useEffect, memo } from 'react';
import type { Dispatch } from 'umi';
import { useModel, connect, useSelector } from 'umi';
import { BackTop, Button } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';

import { PROFILE } from 'pages/Profile/model/constants';
import { isObjectEmpty } from 'utils/utils';
import { GLOBAL } from 'models/global/constants';
import type { User } from 'pages/Profile/model/types';
import type { ConnectState } from 'models/connect';

import styles from './index.less';

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

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: GLOBAL.getNamespace(GLOBAL.ACTIONS.SAVE_COUNTRIES_LIST),
        payload: initialState?.countries,
      });
    }
  }, [dispatch, initialState?.countries]);

  return (
    <div className="app-layout">
      {children}
      <BackTop className={styles.back_to_top}>
        <Button type="primary" htmlType="button" size="large">
          <VerticalAlignTopOutlined /> Up
        </Button>
      </BackTop>
    </div>
  );
});

export default connect(null, null)(AppLayout);
