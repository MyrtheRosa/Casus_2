import { createRouter, createWebHistory } from "vue-router";
import inbox from "../pages/InboxPage.vue";
import home from "../pages/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/inbox",
    name: "inbox",
    component: inbox,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
