import React from 'react';
import { useModel } from 'umi';

export interface IAppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  const antProInitialState = useModel('@@initialState');
  console.log(antProInitialState);
  return <div className="app-layout">{children}</div>;
};

export default AppLayout;
