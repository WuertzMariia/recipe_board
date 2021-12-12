<template>
  <v-col cols="12" sm="12" md="7">
    <div>
      <v-app-bar-title class="mb-4">Zubereitung</v-app-bar-title>
      <div class="ml-4" v-for="(step, index) in recipe.steps" :key="index">
        <v-chip
          color="secondary"
          style="background-color: #348d9a; color: white"
          class="mb-2 mt-7"
          >Schritt {{ index + 1 }}</v-chip
        >
        <div style="word-break: break-all">{{ step }}</div>
      </div>
    </div>
  </v-col>
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
