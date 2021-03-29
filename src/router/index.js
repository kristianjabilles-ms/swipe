import { createRouter, createWebHistory } from '@ionic/vue-router';
// import auth from '@/middleware/auth';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/tabs/',
      component: () => import ('@/pages/Tabs.vue'),
      children: [
        {
          path: '',
          redirect: '/tabs/products'
        },
        {
          path: 'products',
          component: () => import('@/pages/Products.vue')
        },
        {
          path: 'chat',
          component: () => import('@/pages/Chat.vue')
        },
        {
          path: 'profile',
          component: () => import('@/pages/Profile.vue')
        }
      ]
    },
    {
      path: '/product/:slug',
      name: 'Product',
      component: () => import ('@/pages/Product.vue')
    },
    {
      path: '/welcome',
      name: 'WelcomeScreen',
      component: () => import ('@/pages/WelcomeScreen.vue')
    },
  ]
});


// [
//   {
//     path: '/',
//     redirect: '/welcome'
//   },
//   {
//     path: '/profile',
//     name: 'Profile',
//     component: () => import ('@/pages/Profile.vue'),
//     meta: {
//       middleware: [auth],
//     },
//   },
//   {
//     path: '/welcome',
//     name: 'WelcomeScreen',
//     component: () => import ('@/pages/WelcomeScreen.vue')
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: () => import ('@/pages/Authentication.vue')
//   },
//   {
//     path: '/products',
//     name: 'Products',
//     component: () => import ('@/pages/Products.vue'),
//     meta: {
//       middleware: [auth],
//     },
//   },
//   {
//     path: '/product/:slug',
//     name: 'Product',
//     component: () => import ('@/pages/Product.vue'),
//     meta: {
//       middleware: [auth],
//     },
//   }
// ]

export default router;
