


import InboxPage from '../pages/InboxPage.vue'
import HomePage from '../pages/HomePage.vue'
import ContactDetail from '@/pages/ContactDetail.vue'
import LoginPage from '@/pages/LoginPage.vue'
import Dienst from '@/pages/DienstPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
const PrivacyPolicy = () => import('../pages/PrivacyPolicy.vue');

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/InboxPage',
    name: 'inbox',
    component: InboxPage
  },
   {
    path: '/contacts/:id',
    name: 'ContactDetail',
    component: ContactDetail
  },
   {
    path: '/LoginPage',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dienst',
    name: 'dienst',
    component: Dienst 
  },
   {
    path: '/ContactPage',
    name: 'ContactPage',
    component: ContactPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

