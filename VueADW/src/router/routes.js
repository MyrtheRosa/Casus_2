import { createRouter, createWebHistory } from "vue-router";
import InboxPage from "../pages/InboxPage.vue";
import HomePage from "../pages/HomePage.vue";
import ContactDetail from "@/pages/ContactDetail.vue";
import LoginPage from "@/pages/LoginPage.vue";
import DienstPage from "@/pages/DienstPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import TermsOfService from "@/pages/TermsOfService.vue";
import indoorinfo from "@/pages/indoorinfo.vue";
import outdoorinfo from "@/pages/outdoorinfo.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/InboxPage",
    name: "InboxPage",
    component: InboxPage,
  },
  {
    path: "/contacts/:id",
    name: "ContactDetail",
    component: ContactDetail,
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/DienstPage",
    name: "DienstPage",
    component: DienstPage,
  },
  {
    path: "/ContactPage",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/PrivacyPolicy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/TermsOfService",
    name: "TermsOfService",
    component: TermsOfService,
  },

  {
  path: "/indoorinfo",
  name: "IndoorInfo",
  component: indoorinfo
},

{
  path: "/outdoorinfo", 
  name: "OutdoorInfo",
  component: outdoorinfo
}

  // src/router/routes.js
];

  
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // If user tries to go to Inbox but not logged in, redirect to Login
  if (to.name === "Inbox" && !isLoggedIn) {
    return next({ name: "Login" });
  }

  // If user is logged in and tries to access Login page, redirect to Inbox
  if (to.name === "Login" && isLoggedIn) {
    return next({ name: "Inbox" });
  }

  // For all other pages, proceed normally
  next();
});

export default router;
