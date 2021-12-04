import { createStore } from "vuex";
import { recipes } from "@/store/data/recipes";

export default createStore({
  state: {
    currentRecipe: {},
    currentSearchValue: "",
    currentCategories: [],
    recipes: recipes,
    loadedItems: 9,
  },
  mutations: {
    loadSearchValue(state, payload) {
      state.currentSearchValue = payload;
    },
    setCurrentCategories(state, payload) {
      state.currentCategories = payload;
    },
    incrementLoadedItems(state, payload) {
      state.loadedItems += payload;
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
