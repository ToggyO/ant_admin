import { Accesses } from './accesses.enum';
import { ROUTES } from './constants';

const { AUTH, PROFILE, ACADEMICS } = ROUTES;

export default [
  {
    path: AUTH.ROOT,
    layout: false,
    component: '../components/Layouts/LoginLayout',
    routes: [
      {
        name: 'login',
        path: AUTH.SIGN_IN,
        component: './Auth/Login',
      },
      {
        name: 'restore-password',
        path: AUTH.RESTORE_PASSWORD,
        component: './Auth/RestorePassword',
      },
      {
        name: 'reset-password',
        path: AUTH.RESET_PASSWORD,
        component: './Auth/ResetPassword',
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
    path: ACADEMICS.ROOT,
    name: 'Academics',
    icon: 'book',
    access: Accesses.CanAdmin,
    component: './academics/List',
  },
  {
    path: ACADEMICS.DETAILS(':id'),
    access: Accesses.CanAdmin,
    component: './academics/Details',
  },
  {
    path: ACADEMICS.CREATE,
    access: Accesses.CanAdmin,
    component: './academics/Create',
  },
  {
    name: 'Todos',
    icon: 'user',
    path: '/todos',
    access: Accesses.CanAdmin,
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
