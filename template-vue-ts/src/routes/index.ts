import { createRouter, createWebHistory } from "vue-router";
import Content from "../layouts/ContentModel.vue";
import PageA from "../pages/PageA.vue";

const routes = [
  {
    path: "/a",
    component: PageA,
    meta: {
      type: "page", // page
      text: "页面A",
    },
  },
  {
    path: "/b",
    component: PageA,
    meta: {
      type: "page", // page
      text: "页面B",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Content,
      children: routes,
    },
  ],
});

export { router, routes };
