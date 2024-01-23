import { createRouter, createWebHistory } from 'vue-router';

import AppLayout from '../pages/_layouts/TemplateApp.vue';
import AuthLayout from '../pages/_layouts/TemplateAuth.vue';
import Dashboard from '../pages/app/DashboadView.vue';
import SignIn from '../pages/auth/SignIn.vue';
import SignUp from '../pages/auth/SignUp.vue';;
import Orders from '../pages/app/orders/OrdersView.vue';;
// import Forbidden from '@/views/Forbidden.vue';
// import Home from '@/views/Home.vue';
// import Login from '@/views/Login.vue';
// import User from '@/views/User.vue';

const routes = [
  {
    path: '/',
    component: AppLayout,
    // meta: { auth: false },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: { title: 'Dashboard' }
      },
      {
        path: '/orders',
        name: 'Orders',
        component: Orders,
        meta: { title: 'Pedidos' }
      },
    ]
  },
  {
    path: '/',
    name: 'SignIn',
    component: AuthLayout,
    // meta: {
    //   auth: false,
    //   title: 'Login'
    // },
    children: [
      {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
        meta: {
          title: 'Login'
        },
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp,
        meta: {
          title: 'Sign-Up'
        },
      },
    ]


  },
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' | pizza.shop'
  next()
})

export default router;