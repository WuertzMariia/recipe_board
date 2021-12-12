<template>
  <v-col cols="12" sm="12" md="5">
    <div class="pa-4 mb-5 d-flex align-content-bottom align-bottom">
      <div class="recipe-border">
        <v-btn class="ml-1 mr-4" @click="decrementPortionNumber">-</v-btn
        ><span
          >{{ this.portionNumber }}
          {{ this.portionNumber === 1 ? "Portion" : "Portionen" }}</span
        ><v-btn class="mr-1 ml-4" @click="incrementPortionNumber">+</v-btn>
      </div>
    </div>
    <form>
      <div v-for="ingredient in recipe.ingredients" :key="ingredient.name">
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
</template>
<style>
@import "../../../../assets/styles.css";
</style>
<script>
export default {
  props: ["recipe"],
  data() {
    return {
      portionNumber: 1,
      selection: {
        ingredients: [],
      },
    };
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
  beforeMount() {
    this.selection.ingredients = this.recipe.ingredients.map(
      (item) => item.name
    );
  },
};
</script>
