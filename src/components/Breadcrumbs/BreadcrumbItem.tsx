import React from 'react';
import { Link } from 'umi';

import type { Route } from 'antd/lib/breadcrumb/Breadcrumb';

type BreadcrumbItemType = (route: Route, params: any, routes: Route[], paths: string[]) => React.ReactNode;

export const BreadcrumbItem: BreadcrumbItemType = (
  route,
  _0,
  routes,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _1,
) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    // <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    <Link to={route.path}>{route.breadcrumbName}</Link>
  );
};
