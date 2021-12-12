import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/rezept/anlegen",
    name: "rezept",
    component: () => import("../views/CreateRecipe.vue"),
  },
  {
    path: "/einkaufswagen",
    name: "einkaufswagen",
    component: () => import("../views/ShoppingCart.vue"),
  },
  {
    path: "/rezepte/:name",
    name: "rezepte",
    component: () => import("../components/features/recipe-page/RecipePage"),
  },
  // plan on directly navigating to the not-found route using its name
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    beforeEnter(to, from, next) {
      next({
        path: "/",
        replace: true,
      });
    },
  },
  // if you omit the last `*`, the `/` character in params will be encoded when resolving or pushing
  {
    path: "/:pathMatch(.*)",
    name: "bad-not-found",
    beforeEnter(to, from, next) {
      next({
        path: "/",
        replace: true,
      });
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
