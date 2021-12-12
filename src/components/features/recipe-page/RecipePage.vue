<template>
  <div>{{ currentRecipe.name }}</div>
</template>
<style>
@import "../../../assets/styles.css";
</style>
<script>
import { replaceMutatedVowel } from "@/shared/replaceMutatedVowel";

export default {
  data() {
    return {};
  },
  computed: {
    currentRecipe() {
      const storage = this.$store.getters.getCurrentRecipes;
      const splitUrl = this.$router.currentRoute.value.fullPath
        .toString()
        .split("/");
      const splitRecipeName = splitUrl[splitUrl.length - 1]
        .split("-")
        .join(" ");
      return storage.find(
        (item) =>
          replaceMutatedVowel(item.name).toLowerCase() === splitRecipeName
      );
    },
  },
  mounted() {},
};
</script>
