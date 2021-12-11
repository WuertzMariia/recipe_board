<template>
  <div>
    <v-container>
      <v-row
        class="
          display__flex
          flex-wrap-reverse
          align-start align-sm-center
          justify-sm-center
        "
      >
        <v-col
          sm="12"
          md="6"
          class="display__flex flex-column align-start justify-md-start"
          ><v-app-bar-title>{{ recipe.name }}</v-app-bar-title>
          <div class="ml-5 mt-3">Zubereitung: {{ recipe.time }}</div>
          <div class="ml-5 mt-3">
            Schwierigkeitsgrad: {{ recipe.levelOfDifficulty }}
          </div>
        </v-col>
        <v-col sm="12" md="6">
          <v-img
            height="350"
            :src="recipe.imageLink"
            class="dashboard__image__style"
          ></v-img
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
@import "../../../assets/styles.css";
</style>
<script>
import { replaceMutatedVowel } from "@/shared/replaceMutatedVowel";

export default {
  data() {
    return {
      recipe: null,
    };
  },
  beforeMount() {
    const storage = this.$store.getters.getCurrentRecipes;
    const splitUrl = this.$router.currentRoute.value.fullPath
      .toString()
      .split("/");
    const splitRecipeName = splitUrl[splitUrl.length - 1].split("-").join(" ");
    this.recipe = storage.find(
      (item) =>
        replaceMutatedVowel(item.name).toLowerCase().split("-").join(" ") ===
        splitRecipeName
    );
    console.log(this.recipe);
  },
  mounted() {},
};
</script>
