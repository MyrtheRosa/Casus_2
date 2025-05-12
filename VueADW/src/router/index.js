import { createRouter, createWebHistory } from 'vue-router'
import inbox from '../pages/inbox.vue'
import home from '../pages/home.vue'
import ContactDetail from '@/pages/ContactDetail.vue'

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
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
