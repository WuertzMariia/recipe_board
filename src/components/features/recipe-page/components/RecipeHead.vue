<template>
  <v-container>
    <v-row
      class="
        d-flex
        flex-wrap-reverse
        align-start align-sm-center
        justify-sm-center
      "
    >
      <v-col
        sm="12"
        md="7"
        class="d-flex flex-column align-start justify-md-start"
        ><v-app-bar-title class="recipe-subheader">{{
          recipe.name
        }}</v-app-bar-title>
        <div class="ml-5 mt-3">Zubereitung: {{ recipe.time }}</div>
        <div class="ml-5 mt-3">
          Schwierigkeitsgrad: {{ recipe.levelOfDifficulty }}
        </div>
      </v-col>
      <v-col sm="12" md="5">
        <v-img
          height="350"
          :src="recipe.imageLink"
          class="dashboard-image__style"
        ></v-img
      ></v-col>
    </v-row>
  </v-container>
</template>
<style>
@import "../../../../assets/styles.css";
</style>
<script>
export default {
  props: ["recipe"],
  data() {
    return {};
  },
};
</script>
