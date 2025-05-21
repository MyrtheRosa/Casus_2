// src/router/routes.js
import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("../pages/HomePage.vue");
const LoginPage = () => import("../pages/LoginPage.vue");
const ContactPage = () => import("../pages/ContactPage.vue");

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/Login", name: "Login", component: LoginPage },
  { path: "/Contact", name: "Contact", component: ContactPage },
  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
