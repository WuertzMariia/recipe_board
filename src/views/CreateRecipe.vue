<template>
  <div>
    <v-app class="view-container">
      <NewRecipe />
    </v-app>
    <recipe-creation></recipe-creation>
  </div>
</template>

<script>
import NewRecipe from "@/components/features/new-recipe/NewRecipe";
import RecipeCreation from "@/components/features/ReceipeEditorial/components/RecipeCreation";

export default {
  name: "CreateRecipe",
  components: {
    NewRecipe,
    RecipeCreation,
  },
};
</script>
