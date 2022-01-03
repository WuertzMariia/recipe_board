<template>
  <div>
    <v-app class="view-container">
      <NewRecipe />
    </v-app>
  </div>
</template>

<script>
import NewRecipe from "@/components/features/new-recipe/NewRecipe";

export default {
  name: "CreateRecipe",
  components: {
    NewRecipe,
  },
};
</script>
