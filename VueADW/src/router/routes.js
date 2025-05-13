// src/router/routes.js
import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../pages/HomePage.vue')
const LoginPage = () => import('../pages/LoginPage.vue')

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/Login', name: 'Login', component: LoginPage },
  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
