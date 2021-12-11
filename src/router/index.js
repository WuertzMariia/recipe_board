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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
