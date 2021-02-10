
const routes = [
  {
    path: '/',
    name: 'Orera',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('pages/Contacts.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/chat/:otherUserId',
        name: 'Chat',
        component: () => import('pages/Chat.vue')
      },
      {
        path: '/auth/register',
        name: 'Register',
        component: () => import('pages/Auth.vue'),
        meta: {
          hideForAuth: true
        }
      },
      {
        path: '/auth/login',
        name: 'Login',
        component: () => import('pages/Auth.vue'),
        meta: {
          hideForAuth: true
        }
      },
      {
        path: '/room/:otherUserId',
        name: 'Room',
        component: () => import('pages/Room.vue'),
      },
      {
        path: '/about-orera',
        name: 'About Orera',
        component: () => import('pages/AboutOrera.vue'),
      },
      {
        path: '/terms-of-use',
        name: 'Terms Of Use',
        component: () => import('pages/TermsOfUse.vue'),
      },
      {
        path: '/privacy-policy',
        name: 'Privacy Policy',
        component: () => import('pages/PrivacyPolicy.vue'),
      },
      {
        path: '/cookies-policy',
        name: 'Cookies Policy',
        component: () => import('pages/CookiesPolicy.vue'),
      },
      {
        path: '/contact-us',
        name: 'Contact us',
        component: () => import('pages/ContactUs.vue'),
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
