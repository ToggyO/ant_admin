import React, { useCallback } from 'react';
import type { Dispatch } from 'umi';
import { history, connect, useSelector, useModel } from 'umi';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Modal, Spin } from 'antd';

import { AUTH } from 'pages/Auth/model/constants';

import type { ConnectState } from 'models/connect';
import type { User } from 'pages/Profile/model/types';

import HeaderDropdown from '../HeaderDropdown';

import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
  dispatch?: Dispatch;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu = true, dispatch }) => {
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
        Modal.confirm({
          title: 'You are trying to leave the system. Are you sure?',
          onOk: () => dispatch && dispatch({ type: AUTH.getNamespace(AUTH.EFFECTS.SIGN_OUT) }),
        });
        return;
      }
      history.push(`/${key}`);
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
        <Menu.Item key="profile">
          <UserOutlined />
          Profile
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
