import { createRouter, createWebHistory } from 'vue-router'
import InboxPage from '../pages/InboxPage.vue'
import HomePage from '../pages/HomePage.vue'
import ContactDetail from '@/pages/ContactDetail.vue'
import LoginPage from '@/pages/LoginPage.vue'
import DienstPage from '@/pages/DienstPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/InboxPage',
    name: 'InboxPage',
    component: InboxPage
  },
   {
    path: '/contacts/:id',
    name: 'ContactDetail',
    component: ContactDetail
  },
   {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/DienstPage',
    name: 'DienstPage',
    component: DienstPage 
  },
   {
    path: '/ContactPage',
    name: 'ContactPage',
    component: ContactPage
  },
   {
    path: '/PrivacyPolicy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
// src/router/routes.js

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

