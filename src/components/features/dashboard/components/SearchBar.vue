<template>
  <div class="display__flex__column">
    <div class="margin__large input__search__bar">
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
    <div class="display__flex">
      <form
        @submit.prevent="submit"
        class="display__flex__row display__flex__gap"
      >
        <div v-for="(category, index) in categories" :key="category">
          <v-checkbox
            hide-details
            type="checkbox"
            color="indigo darken-3"
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
