<template>
  <v-app-bar density="compact">
    <v-app-bar-title>
      <router-link :to="{ name: 'home' }" class="routing-link"
        >TheChef</router-link
      ></v-app-bar-title
    >
    <v-spacer></v-spacer>
    <v-btn class="mr-3" text>
      <router-link :to="{ name: 'home' }" class="routing-link"
        >Dashboard</router-link
      ></v-btn
    >
    <v-btn class="mr-3" text
      ><router-link :to="{ name: 'rezept' }" class="routing-link"
        >Rezepte anlegen</router-link
      ></v-btn
    >
    <v-btn class="mr-3" text>
      <router-link :to="{ name: 'einkaufswagen' }" class="routing-link"
        >Einkaufswagen</router-link
      ></v-btn
    >
    <v-divider inset vertical></v-divider>
    <v-btn class="mr-4 ml-5" color="#348d9a" plain>
      <v-icon
        left
        class="icon-color"
        color="white"
        icon="mdi-handshake-outline"
      ></v-icon>
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
