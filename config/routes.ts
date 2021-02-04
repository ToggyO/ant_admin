import { Accesses } from './accesses.enum';
import { ROUTES } from './constants';

const { AUTH, PROFILE } = ROUTES;

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
    access: Accesses.CanAdmin,
    component: './Admin',
  },
  {
    path: PROFILE.ROOT,
    access: Accesses.CanAdmin,
    component: './Profile',
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
