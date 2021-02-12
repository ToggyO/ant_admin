import { ROUTES } from 'config/constants';

export const getBreadcrumbs = (name: string) => [
  {
    path: '/',
    breadcrumbName: 'Home',
  },
  {
    path: ROUTES.ACADEMICS.ROOT,
    breadcrumbName: 'Academics',
  },
  {
    path: `/${name || ''}`,
    breadcrumbName: `${name || ''}`,
  },
];
