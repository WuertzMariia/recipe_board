<template>
  <v-form v-model="valid">
    <v-container>
      <h2 class="ml-3 mb-5 mt-5 d-flex justify-center">Rezept anlegen</h2>
      <v-row class="d-flex flex-column justify-center align-center">
        <v-col cols="12" md="8">
          <alert-popup
            type="name_validation_error"
            v-if="showValidationErrorPopupName"
          ></alert-popup>
          <v-text-field v-model="name" :counter="3" label="Name"></v-text-field>
          <alert-popup
            type="url_validation_error"
            v-if="showValidationErrorPopupLink"
          ></alert-popup>
          <v-text-field
            v-model="imageLink"
            :counter="10"
            label="Link zum Bild"
          ></v-text-field>
          <alert-popup
            type="general"
            v-if="showValidationErrorPopupTime"
          ></alert-popup>
          <v-text-field v-model="time" type="time" label="Zeit"></v-text-field>
          <h4 class="mt-3">
            Ordnen Sie das Rezept den folgenden Kategorien zu:
          </h4>
          <alert-popup
            type="general"
            v-if="showValidationErrorPopupCategories"
          ></alert-popup>
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
          <h4 class="mt-5">Schwierigkeitsgrad</h4>
          <alert-popup
            type="general"
            v-if="showValidationErrorPopupLefOfDif"
          ></alert-popup>
          <v-radio-group v-model="levelOfDifficulty">
            <v-radio
              v-for="n in levels"
              :key="n"
              :label="`${n}`"
              :value="n"
            ></v-radio>
          </v-radio-group>
          <h4>Nutritional Score</h4>
          <alert-popup
            type="general"
            v-if="showValidationErrorPopupScore"
          ></alert-popup>
          <v-rating v-model="nutritionalScore" hover></v-rating>
          <h4 class="ml-3 mb-5 mt-5 d-flex justify-start">
            Zutaten hinzufügen
          </h4>
          <alert-popup
            type="general"
            v-if="showValidationErrorPopupIngredients"
          ></alert-popup>
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
          <alert-popup
            type="general"
            v-if="showValidationErrorPopupSteps"
          ></alert-popup>
          <v-textarea v-model="step"></v-textarea>
          <v-btn text color="#348d9a" @click="addNewStep"> Hinzufügen </v-btn>
          <added-data
            v-if="steps.length !== 0"
            v-bind:addedData="steps"
            v-bind:type="'steps'"
          ></added-data>
          <h4 class="ml-3 mb-5 mt-12 d-flex justify-start">
            Ernäherungswerte hinzufügen
          </h4>
          <alert-popup
            type="general"
            v-if="showValidationErrorPopupNutrItems"
          ></alert-popup>
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
import { levelOfDifficulty } from "@/store/data/levelOfDifficulty";

export default {
  components: {
    AddedData,
    AlertPopup,
  },
  data: () => ({
    showPopUp: false,
    showValidationErrorPopupLink: false,
    showValidationErrorPopupName: false,
    showValidationErrorPopupTime: false,
    showValidationErrorPopupCategories: false,
    showValidationErrorPopupLefOfDif: false,
    showValidationErrorPopupScore: false,
    showValidationErrorPopupIngredients: false,
    showValidationErrorPopupSteps: false,
    showValidationErrorPopupNutrItems: false,
    categories,
    levels: levelOfDifficulty,
    nutritionalScore: 0,
    selectionCategory: {
      category: [],
    },
    name: "",
    imageLink: "",
    time: "",
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
    // TODO validate form inputs
    addNewIngredientItem() {
      if (
        this.ingredientName.length !== 0 &&
        this.mass.length !== 0 &&
        this.unity.length !== 0
      ) {
        const ingName = this.ingredientName;
        const mass = this.mass.toString();
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
        this.nameNutriScore !== 0 &&
        this.value.length !== 0
      ) {
        const dayQuota = this.dayQuota;
        const nameNutriScore = this.nameNutriScore;
        const value = this.value.toString();
        this.nutritionalValues.push({ name: nameNutriScore, value, dayQuota });
        this.dayQuota = "";
        this.nameNutriScore = "";
        this.value = "";
      }
    },
    validateUrl() {
      let regex = new RegExp(
        "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.)([0-9A-Za-z-.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
      );
      const correctUrl = regex.test(this.imageLink);
      if (!correctUrl) {
        this.showValidationErrorPopupLink = true;
      }
      return correctUrl;
    },
    validateName() {
      const valid = this.name.length <= 5;
      if (valid) {
        this.showValidationErrorPopupName = true;
      }
      return !valid;
    },
    validateTime() {
      const valid = this.time.toString().length !== 0;
      if (!valid) {
        this.showValidationErrorPopupTime = true;
      }
      return valid;
    },
    validateCategories() {
      const valid = this.selectionCategory.category.length !== 0;
      if (!valid) {
        this.showValidationErrorPopupCategories = true;
      }
      return valid;
    },
    validateLevelOfDifficulty() {
      const valid = this.levelOfDifficulty.length !== 0;
      if (!valid) {
        this.showValidationErrorPopupLefOfDif = true;
      }
      return valid;
    },
    validateNutriScore() {
      const valid = this.nutritionalScore !== 0;
      if (!valid) {
        this.showValidationErrorPopupScore = true;
      }
      return valid;
    },
    validateIngredients() {
      const valid =
        this.ingredients.length !== 0 &&
        this.ingredients.every((item) =>
          Object.entries(item).every((item) => item.length !== 0)
        );
      if (!valid) {
        this.showValidationErrorPopupIngredients = true;
      }
      return valid;
    },
    validateSteps() {
      const valid = this.steps.length !== 0;
      if (!valid) {
        this.showValidationErrorPopupSteps = true;
      }
      return valid;
    },
    validateNutriItems() {
      const valid = this.nutritionalValues.length !== 0;
      if (!valid) {
        this.showValidationErrorPopupNutrItems = true;
      }
      return valid;
    },
    validateForm() {
      const validUrl = this.validateUrl();
      const validName = this.validateName();
      const validTime = this.validateTime();
      const validCategories = this.validateCategories();
      const validScore = this.validateNutriScore();
      const validLevelOfDiff = this.validateLevelOfDifficulty();
      const validIngredients = this.validateIngredients();
      const validSteps = this.validateSteps();
      const validateNutriItems = this.validateNutriItems();
      return (
        validUrl &&
        validName &&
        validTime &&
        validCategories &&
        validLevelOfDiff &&
        validScore &&
        validIngredients &&
        validSteps &&
        validateNutriItems
      );
    },
    saveNewRecipe() {
      const newRecipe = {
        name: this.name,
        imageLink: this.imageLink,
        time: this.time.toString(),
        categories: this.selectionCategory.category,
        levelOfDifficulty: this.levelOfDifficulty,
        nutritionalScore: this.nutritionalScore.toString(),
        ingredients: this.ingredients,
        steps: this.steps,
        nutritionalValues: this.nutritionalValues,
      };
      const allowSaving = Object.values(newRecipe).every(
        (item) => item.length !== 0
      );
      if (this.validateForm() && allowSaving) {
        this.$store.commit("addNewRecipe", newRecipe);
        this.showPopUp = true;
        window.setTimeout(() => {
          this.showPopUp = false;
          this.$router.push({ path: "/" });
        }, 2000);
      } else {
        alert(
          "Sie haben nicht alle Felder ausgefüllt! Das Rezept kann nicht abgespeichert werden."
        );
      }
    },
  },
  beforeMount() {},
};
</script>
