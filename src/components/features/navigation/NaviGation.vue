<template>
  <v-app-bar density="compact">
    <v-app-bar-title>TheChef</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn text>Home</v-btn>
    <v-btn class="mr-3" text>Rezept anlegen</v-btn>
    <v-btn class="mr-3" text>Einkaufswagen</v-btn>
    <v-divider inset vertical></v-divider>
    <v-btn class="mr-4 ml-5" color="primary" plain>
      <v-icon left icon="mdi-handshake-outline"></v-icon>
    </v-btn>
  </v-app-bar>
</template>
<style>
@import "../../../assets/styles.css";
</style>
<script>
export default {
  data() {
    return {
      currentRecipe: "",
    };
  },
  mounted() {
    // this.joke = this.$store.getters.getCurrentJoke;
  },
  computed: {},
};
</script>
