import { ROUTES } from 'config/constants';

export const getBreadcrumbs = (name: string) => [
  {
    path: '/',
    breadcrumbName: 'Home',
  },
  {
    path: ROUTES.LEARNERS.ROOT,
    breadcrumbName: 'Learners',
  },
  {
    path: `/${name || ''}`,
    breadcrumbName: `${name || ''}`,
  },
];
