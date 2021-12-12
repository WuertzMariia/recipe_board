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
      <v-row
        class="
          ml-5
          mt-5
          display__flex
          flex-column
          justify-sm-start
          align-start align-content-sm-start
        "
      >
        <div
          class="
            pa-4
            mb-5
            display__flex
            align-content-bottom align-bottom
            recipe-border
          "
        >
          <v-btn class="ml-1 mr-4" @click="decrementPortionNumber">-</v-btn
          ><span
            >{{ this.portionNumber }}
            {{ this.portionNumber === 1 ? "Portion" : "Portionen" }}</span
          ><v-btn class="mr-1 ml-4" @click="incrementPortionNumber">+</v-btn>
        </div>
        <form>
          <div v-for="ingredient in recipe.ingredients" :key="ingredient.name">
            <v-checkbox
              hide-details
              color="indigo"
              :value="ingredient.name"
              :id="'ingredient' + index"
              :label="`${
                ingredient.mass * this.portionNumber === 0
                  ? ''
                  : ingredient.mass * this.portionNumber
              } ${ingredient.unity}  ${ingredient.name}`"
              v-model="selection.ingredients"
            />
          </div>
        </form>
        <v-btn type="submit" @click="submit" class="mt-3 mb-5"
          >Zum Einkaufswagen hinzufügen</v-btn
        >
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
      portionNumber: 1,
      selection: {
        ingredients: [],
      },
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
    this.selection.ingredients = this.recipe.ingredients.map(
      (item) => item.name
    );
    console.log(this.selection);
  },
  methods: {
    submit() {
      console.log(this.selection.ingredients); // TODO shopping cart
    },
    incrementPortionNumber() {
      this.portionNumber += 1;
    },
    decrementPortionNumber() {
      this.portionNumber = this.portionNumber <= 1 ? 1 : this.portionNumber - 1;
    },
  },
  mounted() {},
};
</script>
