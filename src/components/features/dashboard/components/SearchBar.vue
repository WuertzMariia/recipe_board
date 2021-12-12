<template>
  <div
    class="
      d-flex
      flex-column
      justify-sm-center
      align-content-center align-center
    "
  >
    <div class="mt-3 input-search__bar">
      <v-text-field
        type="text"
        id="search"
        v-model="currentSearchValue"
        append-icon="mdi-magnify"
        prepend-inner-icon="mdi-magnify"
        v-on:input="setSearchValue, setCategories"
        label="Rezepte suchen"
      />
    </div>
    <div>
      <form
        @submit.prevent="submit"
        class="d-flex flex-row flex-wrap justify-sm-center display-flex__gap"
      >
        <div v-for="(category, index) in categories" :key="category">
          <v-checkbox
            hide-details
            type="checkbox"
            color="#348d9a"
            @change="setSearchValue, setCategories"
            :value="category"
            :id="'cb-category-' + index"
            :label="category"
            v-model="selection.category"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<style>
@import "./../../../../assets/styles.css";
</style>
<script>
import { categories } from "@/store/data/categories";

export default {
  data() {
    return {
      currentSearchValue: "",
      categories,
      submitted: false,
      selection: {
        category: [],
      },
    };
  },
  computed: {
    /** sets current search value */
    setSearchValue() {
      return this.$store.commit("loadSearchValue", this.currentSearchValue);
    },
    /** sets current filter categories */
    setCategories() {
      return this.$store.commit(
        "setCurrentCategories",
        this.selection.category
      );
    },
  },
};
</script>
