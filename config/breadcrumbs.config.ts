import routes from './routes';

export const breadcrumbsConfig = routes.reduce((acc, route) => {
  if (!route.path || !route.name) {
    return acc;
  }
  const path = route.path?.slice(1, route.name?.length);
  const breadcrumbName = route.name;
  acc.push({ path, breadcrumbName });
  return acc;
}, [] as { path: string; breadcrumbName: string }[]);
