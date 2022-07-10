import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: import("@/views/View-Login.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/View-Main.vue"),
    },
  ],
});

export default router;
