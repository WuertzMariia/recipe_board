<template>
  <div class="margin__large display__flex">
    <input
      class="input__search__bar"
      type="text"
      id="search"
      v-model="currentSearchValue"
      placeholder="Rezepte suchen"
    />
    <v-btn
      class="mx-3"
      color="primary"
      icon="mdi-magnify"
      @click="setSearchValue"
      size="small"
    />
  </div>
</template>
<style>
@import "./../../../../assets/styles.css";
</style>
<script>
export default {
  data() {
    return {
      currentSearchValue: "",
    };
  },
  computed: {
    setSearchValue() {
      return this.$store.commit("loadSearchValue", this.currentSearchValue);
    },
  },
};
</script>
