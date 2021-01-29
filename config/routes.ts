import { ROUTES } from './constants';

const { AUTH } = ROUTES;

export default [
  {
    path: AUTH.SIGN_IN,
    layout: false,
    component: '../components/Layouts/LoginLayout',
    routes: [
      {
        name: 'login',
        path: AUTH.SIGN_IN,
        component: './Auth',
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    icon: 'crown',
    // access: 'canAdmin',
    component: './Admin',
    // routes: [],
  },
  {
    name: 'Todos',
    icon: 'user',
    path: '/todos',
    component: './Todos',
  },
  {
    path: '/',
    redirect: '/admin',
  },
  {
    component: './404',
  },
];
