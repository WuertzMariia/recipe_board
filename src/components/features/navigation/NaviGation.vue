<template>
  <v-app-bar density="compact">
    <v-app-bar-title>TheChef</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn class="mr-3" text>
      <router-link :to="{ name: 'home' }">Dashboard</router-link></v-btn
    >
    <v-btn class="mr-3" text
      ><router-link :to="{ name: 'rezept' }"
        >Rezepte anlegen</router-link
      ></v-btn
    >
    <v-btn class="mr-3" text>
      <router-link :to="{ name: 'einkaufswagen' }"
        >Einkaufswagen</router-link
      ></v-btn
    >
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
  computed: {},
  mounted() {}, // TODO activate tab navigation
};
</script>
