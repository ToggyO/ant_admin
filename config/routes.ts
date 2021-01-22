export default [
  {
    path: '/user',
    layout: false,
    routes: [
      // {
      //   path: '/user',
      //   routes: [
      //     {
      //       name: 'login',
      //       path: '/user/login',
      //       component: './User/login',
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [],
  // },
  {
    name: 'Todos',
    icon: 'user',
    path: '/todos',
    component: './Todos',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
