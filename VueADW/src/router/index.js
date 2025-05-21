import { createRouter, createWebHistory } from 'vue-router'
import inbox from '../pages/InboxPage.vue'
import home from '../pages/home.vue'
import ContactDetail from '@/pages/ContactDetail.vue'
import LoginPage from '@/pages/LoginPage.vue'
import Dienst from '@/pages/DienstPage.vue'

const routes = [
  {
    path: '/HomePage',
    name: 'home',
    component: home
  },
  {
    path: '/InboxPage',
    name: 'inbox',
    component: inbox
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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
