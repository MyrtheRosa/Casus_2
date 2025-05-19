import { createRouter, createWebHistory } from 'vue-router'
import inbox from '../pages/inbox.vue'
import home from '../pages/home.vue'
import ContactDetail from '@/pages/ContactDetail.vue'
import LoginPage from '@/pages/LoginPage.vue'
import Dienst from '@/pages/dienst.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/inbox',
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
