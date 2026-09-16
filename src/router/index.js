import { createWebHistory, createRouter } from "vue-router";

import MainLayout from "@/layout/MainLayout.vue";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import NotFound from "@/pages/404.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "about",
        name: "about",
        component: About,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
