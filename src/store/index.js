import { createStore } from "vuex";
import { recipes } from "@/store/recipes";

export default createStore({
  state: {
    currentRecipe: {},
    currentSearchValue: "",
    recipes: recipes,
  },
  mutations: {
    loadSearchValue(state, payload) {
      state.currentSearchValue = payload;
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
