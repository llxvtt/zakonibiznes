import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
            {
                  path: "/",
                  name: "home",
                  meta: { title: "Миграционные услуги в Москве" },
                  component: Home,
            },
            {
                  path: "/about",
                  name: "about",
                  meta: { title: "О компании" },
                  component: () => import("../pages/About.vue"),
            },

            {
                  path: "/blog",
                  name: "blog",
                  meta: { title: "Блог" },
                  component: () => import("../pages/Blog.vue"),
            },
            {
                  path: "/contacts",
                  name: "contacts",
                  meta: { title: "Контакты" },
                  component: () => import("../pages/Contacts.vue"),
            },
            {
                  path: "/privacy",
                  name: "privacy",
                  component: () => import("../pages/Privacy.vue"),
            },
            {
                  path: "/service/:id",
                  name: "service",
                  component: () => import("../pages/Service.vue"),
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

router.afterEach((to) => {
      if (to.meta.title) {
            document.title = to.meta.title;
      } else if (to.params.id && to.fullPath.includes("/service")) {
            document.title = "";
      } else if (to.params.id && to.fullPath.includes("/article")) {
            document.title = "";
      } else {
            document.title = "Закон и Бизнес";
      }
});

export default router;
