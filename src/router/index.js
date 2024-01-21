import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../pages/app/DashboadView.vue';
import SignIn from '../pages/auth/SignIn.vue';
// import AboutMe from '@/views/AboutMe.vue';
// import Forbidden from '@/views/Forbidden.vue';
// import Home from '@/views/Home.vue';
// import Login from '@/views/Login.vue';
// import User from '@/views/User.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard, meta: { auth: false } },
  { path: '/sign-in', name: 'SignIn', component: SignIn, meta: { auth: false } },
  // { path: '/forbidden', name: 'Forbidden', component: Forbidden, meta: { auth: false } },
  // { path: '/users/:id', name: 'User', component: User, meta: { auth: true } },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About,
  //   children: [
  //     {
  //       path: '/about/me',
  //       name: 'AboutMe',
  //       component: AboutMe,
  //       meta: { auth: true },
  //     },
  //     {
  //       path: '/about/company',
  //       name: 'AboutCompany',
  //       component: AboutCompany,
  //       meta: { auth: true },
  //     },
  //   ],
  // },
];



const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.auth) {
//     const logged = window.localStorage.getItem('logged') === 'true';
//     if (!logged) {
//       next('/forbidden');
//       return;
//     }
//   }
//   next();
// });

export default router;