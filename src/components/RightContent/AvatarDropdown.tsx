import { stringify } from 'querystring';

import React, { useCallback } from 'react';
import type { Dispatch } from 'umi';
import { history, connect, useSelector, useModel } from 'umi';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';

import { ROUTES } from 'config/constants';
import { clearTokens } from 'services/auth';
import { AUTH } from 'pages/Auth/model/constants';

import type { ConnectState } from 'models/connect';
import type { User } from 'pages/Profile/model/types';

import HeaderDropdown from '../HeaderDropdown';

import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
  dispatch?: Dispatch;
};

/**
 * Log out and save the current url
 */
const loginOut = () => {
  clearTokens();
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

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu, dispatch }) => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const user = useSelector<ConnectState, User>((state) => state.profile.user);

  const onMenuClick = useCallback(
    (event: {
      key: React.Key;
      keyPath: React.Key[];
      item: React.ReactInstance;
      domEvent: React.MouseEvent<HTMLElement>;
    }) => {
      const { key } = event;
      if (key === 'logout') {
        setInitialState({ ...initialState, currentUser: undefined });
        if (dispatch) {
          dispatch({ type: AUTH.getNamespace(AUTH.EFFECTS.SIGN_OUT) });
        }
        loginOut();
        return;
      }
      history.push(`/account/${key}`);
    },
    [dispatch, initialState, setInitialState],
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!user) {
    return loading;
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      {menu && (
        <Menu.Item key="center">
          <UserOutlined />
          个人中心
        </Menu.Item>
      )}
      {menu && (
        <Menu.Item key="settings">
          <SettingOutlined />
          个人设置
        </Menu.Item>
      )}
      {menu && <Menu.Divider />}

      <Menu.Item key="logout">
        <LogoutOutlined />
        Log out
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} src={user.avatar} alt="avatar" />
        <span className={`${styles.name} anticon`}>{user.name}</span>
      </span>
    </HeaderDropdown>
  );
};

export default connect(null, null)(AvatarDropdown);
