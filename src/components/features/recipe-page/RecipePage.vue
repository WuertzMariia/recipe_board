<template>
  <div>
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
      <v-row
        class="
          ml-5
          mt-5
          d-flex
          flex-column
          justify-sm-start
          align-start align-content-sm-start
        "
      >
      </v-row>
      <v-row style="display: flex; flex-direction: row">
        <v-col cols="12" sm="12" md="5">
          <div
            class="
              pa-4
              mb-5
              d-flex
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
            <div
              v-for="ingredient in recipe.ingredients"
              :key="ingredient.name"
            >
              <v-checkbox
                hide-details
                color="#348d9a"
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
        </v-col>
        <v-col cols="12" sm="12" md="7">
          <div>
            <v-app-bar-title class="mb-4">Zubereitung</v-app-bar-title>
            <div v-for="(step, index) in recipe.steps" :key="index">
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
