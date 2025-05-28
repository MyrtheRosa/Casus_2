import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../pages/HomePage.vue')
const LoginPage = () => import('../pages/LoginPage.vue')
const ContactPage = () => import('../pages/ContactPage.vue')
const PrivacyPolicy = () => import('../pages/PrivacyPolicy.vue')
const TermsOfService = () => import('../pages/TermsOfService.vue')
const InboxPage = () => import('../pages/InboxPage.vue')

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/Login', name: 'Login', component: LoginPage },
  { path: '/Contact', name: 'Contact', component: ContactPage },
  { path: '/PrivacyPolicy', name: 'Privacy', component: PrivacyPolicy },
  { path: '/TermsOfService', name: 'TermsOfService', component: TermsOfService },
  { path: '/InboxPage', name: 'Inbox', component: InboxPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  // If user tries to go to Inbox but not logged in, redirect to Login
  if (to.name === 'Inbox' && !isLoggedIn) {
    return next({ name: 'Login' })
  }

  // If user is logged in and tries to access Login page, redirect to Inbox
  if (to.name === 'Login' && isLoggedIn) {
    return next({ name: 'Inbox' })
  }

  // For all other pages, proceed normally
  next()
})

export default router
