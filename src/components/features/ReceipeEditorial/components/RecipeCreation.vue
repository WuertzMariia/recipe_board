<template>
  <v-form v-model="valid">
    <v-container>
      <h2 class="ml-3 mb-5 mt-5 d-flex justify-center">Rezept anlegen</h2>
      <v-row class="d-flex flex-column justify-center align-center">
        <v-col cols="12" md="8">
          <v-text-field v-model="name" :counter="3" label="Name"></v-text-field>
          <v-text-field
            v-model="imageLink"
            :counter="10"
            label="Link zum Bild"
          ></v-text-field>
          <v-text-field v-model="time" label="Zeit"></v-text-field>
          <div>Ordnen Sie das Rezept den folgenden Kategorien zu:</div>
          <div class="d-flex flex-row flex-wrap justify-space-start">
            <div v-for="(category, index) in categories" :key="category">
              <v-checkbox
                hide-details
                type="checkbox"
                color="#348d9a"
                :value="category"
                :id="'cb-category-' + index"
                :label="category"
                v-model="selectionCategory.category"
              />
            </div>
          </div>
          <v-text-field
            v-model="levelOfDifficulty"
            label="Schwierigkeitsgrad"
          ></v-text-field>
          <v-text-field
            v-model="nutritionalScore"
            label="Nutri-Score"
            required
          ></v-text-field>
          <h4 class="ml-3 mb-5 mt-5 d-flex justify-start">
            Zutaten hinzufügen
          </h4>
          <div class="d-flex justify-space-between flex-gap">
            <v-text-field
              v-model="ingredientName"
              label="Name"
              required
            ></v-text-field>
            <v-text-field v-model="mass" label="Masse" required></v-text-field>
            <v-text-field
              v-model="unity"
              label="Einheiten"
              required
            ></v-text-field>
            <v-btn
              text
              color="#348d9a"
              class="mt-3"
              @click="addNewIngredientItem"
            >
              Hinzufügen
            </v-btn>
          </div>
          <div v-if="ingredients.length !== 0">
            <added-data
              v-bind:addedData="ingredients"
              v-bind:type="'ingredients'"
            ></added-data>
          </div>
          <h4 class="ml-3 mb-5 mt-5 d-flex justify-start">
            Zwischenschritt hinzufügen
          </h4>
          <v-textarea v-model="step"></v-textarea>
          <v-btn text color="#348d9a" @click="addNewStep"> Hinzufügen </v-btn>
          <added-data
            v-if="steps.length !== 0"
            v-bind:addedData="steps"
            v-bind:type="'steps'"
          ></added-data>
          <h4 class="ml-3 mb-5 mt-5 d-flex justify-start">
            Ernäherungswerte hinzufügen
          </h4>
          <div class="d-flex justify-space-between flex-gap">
            <v-text-field
              v-model="nameNutriScore"
              label="Name"
              required
            ></v-text-field>
            <v-text-field v-model="value" label="Einheit"></v-text-field>
            <v-text-field
              v-model="dayQuota"
              label="Tagesbedarf"
              required
            ></v-text-field>
            <v-btn
              text
              color="#348d9a"
              class="mt-3"
              @click="addNewNutriScoreItem"
            >
              Hinzufügen
            </v-btn>
          </div>
          <added-data
            v-if="nutritionalValues.length !== 0"
            v-bind:addedData="nutritionalValues"
            v-bind:type="'nutritionalValues'"
          ></added-data>
          <div class="d-flex flex-column justify-center align-content-center">
            <v-btn
              text
              size="x-large"
              color="#348d9a"
              class="mt-3 mb-12"
              @click="saveNewRecipe"
            >
              Rezept speichern
            </v-btn>
            <alert-popup v-bind:type="'success'" v-if="showPopUp"></alert-popup>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<style>
@import "../../../../assets/styles.css";
</style>
<script>
import { categories } from "@/store/data/categories";
import AddedData from "@/components/features/ReceipeEditorial/components/AddedData";
import AlertPopup from "@/shared/components/AlertPopup";

export default {
  components: {
    AddedData,
    AlertPopup,
  },
  data: () => ({
    showPopUp: false,
    categories,
    selectionCategory: {
      category: [],
    },
    name: "",
    imageLink: "",
    time: "",
    nutritionalScore: "",
    levelOfDifficulty: "",
    ingredients: [],
    ingredientName: "",
    mass: "",
    unity: "",
    step: "",
    steps: [],
    value: "",
    dayQuota: "",
    nameNutriScore: "",
    nutritionalValues: [],
  }),
  methods: {
    addNewIngredientItem() {
      if (
        this.ingredientName.length !== 0 &&
        this.mass.length !== 0 &&
        this.unity.length !== 0
      ) {
        const ingName = this.ingredientName;
        const mass = this.mass;
        const unity = this.unity;
        this.ingredients.push({
          name: ingName,
          mass,
          unity,
        });
        this.ingredientName = "";
        this.mass = "";
        this.unity = "";
      }
    },
    addNewStep() {
      if (this.step.length !== 0) {
        const step = this.step;
        this.steps.push(step);
        this.step = "";
      }
    },
    addNewNutriScoreItem() {
      if (
        this.dayQuota.length !== 0 &&
        this.nameNutriScore.length !== 0 &&
        this.value.length !== 0
      ) {
        const dayQuota = this.dayQuota;
        const nameNutriScore = this.nameNutriScore;
        const value = this.value;
        this.nutritionalValues.push({ name: nameNutriScore, value, dayQuota });
        this.dayQuota = "";
        this.nameNutriScore = "";
        this.value = "";
      }
    },
    saveNewRecipe() {
      const newRecipe = {
        name: this.name,
        imageLink: this.imageLink,
        time: this.time,
        categories: this.selectionCategory.category,
        levelOfDifficulty: this.levelOfDifficulty,
        nutritionalScore: this.nutritionalScore,
        ingredients: this.ingredients,
        steps: this.steps,
        nutritionalValues: this.nutritionalValues,
      };
      this.$store.commit("addNewRecipe", newRecipe);
      this.showPopUp = true;
      window.setTimeout(() => {
        this.showPopUp = false;
      }, 2000);
    },
  },
  beforeMount() {},
};
</script>
