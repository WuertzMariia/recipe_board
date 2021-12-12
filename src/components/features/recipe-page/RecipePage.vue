<template>
  <div>
    <v-container>
      <recipe-head v-bind:recipe="recipe"></recipe-head>
      <v-row style="display: flex; flex-direction: row">
        <recipe-ingredients v-bind:recipe="recipe"></recipe-ingredients>
        <recipe-steps v-bind:recipe="recipe"></recipe-steps>
      </v-row>
      <v-row
        ><nutritional-value v-bind:recipe="recipe"></nutritional-value
      ></v-row>
    </v-container>
  </div>
</template>
<style>
@import "../../../assets/styles.css";
</style>
<script>
import { replaceMutatedVowel } from "@/shared/replaceMutatedVowel";
import RecipeHead from "@/components/features/recipe-page/components/RecipeHead";
import RecipeSteps from "@/components/features/recipe-page/components/RecipeSteps";
import RecipeIngredients from "@/components/features/recipe-page/components/RecipeIngredients";
import NutritionalValue from "@/components/features/recipe-page/components/NutritionalValue";

export default {
  components: { NutritionalValue, RecipeIngredients, RecipeSteps, RecipeHead },
  data() {
    return {};
  },
  computed: {
    recipe() {
      const storage = this.$store.getters.getCurrentRecipes;
      const splitUrl = this.$router.currentRoute.value.fullPath
        .toString()
        .split("/");
      const splitRecipeName = splitUrl[splitUrl.length - 1]
        .split("-")
        .join(" ");
      return storage.find(
        (item) =>
          replaceMutatedVowel(item.name).toLowerCase().split("-").join(" ") ===
          splitRecipeName
      );
    },
  },
  methods: {},
  mounted() {},
};
</script>
