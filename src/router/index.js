import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
            {
                  path: "/",
                  name: "home",
                  component: Home,
            },
            {
                  path: "/about",
                  name: "about",
                  component: () => import("../pages/About.vue"),
            },
            {
                  path: "/service",
                  name: "service",
                  component: () => import("../pages/Service.vue"),
            },
            {
                  path: "/blog",
                  name: "blog",
                  component: () => import("../pages/Blog.vue"),
            },
            {
                  path: "/contacts",
                  name: "contacts",
                  component: () => import("../pages/Contacts.vue"),
            },
            {
                  path: "/privacy",
                  name: "privacy",
                  component: () => import("../pages/Privacy.vue"),
            },
            {
                  path: "/article/:id",
                  name: "article",
                  component: () => import("../pages/ArticleDetail.vue"),
            },
      ],
      scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                  return savedPosition;
            } else {
                  return { top: 0 };
            }
      },
});

export default router;
