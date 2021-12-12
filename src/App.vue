<template>
  <v-app class="app-container">
    <v-main>
      <NaviGation />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import store from "./store/index";
import NaviGation from "@/components/features/navigation/NaviGation";

export default {
  name: "App",
  components: { NaviGation },
  store,
  data: () => ({
    //
  }),
};
</script>
