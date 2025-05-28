import { createRouter, createWebHistory } from 'vue-router'
import inbox from '../pages/inbox.vue'
import home from '../pages/HomePage.vue'
import ContactDetail from '@/pages/ContactDetail.vue'
import LoginPage from '@/pages/LoginPage.vue'

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

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router