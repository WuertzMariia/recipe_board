import { createStore } from "vuex";
import { recipes } from "@/store/data/recipes";

export default createStore({
  state: {
    currentRecipe: {},
    currentSearchValue: "",
    currentCategories: [],
    recipes: recipes,
  },
  mutations: {
    loadSearchValue(state, payload) {
      state.currentSearchValue = payload;
    },
    setCurrentCategories(state, payload) {
      state.currentCategories = payload;
    },
  },
  actions: {},
  modules: {
    setCurrentCount(state, payload) {
      state.currentRecipe = payload;
    },
  },
  getters: {
    getCurrentRecipes: (state) => state.recipes,
  },
});
