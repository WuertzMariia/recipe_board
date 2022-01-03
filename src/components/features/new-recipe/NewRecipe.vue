<template>
  <SearchBar />
  <div>
    <form @submit.prevent>
      <h4>Create Recipe</h4>
      <input
        v-model="recipe.name"
        class="input"
        type="text"
        placeholder="Name"
      />
      <input
        v-model="recipe.imageLink"
        class="input"
        type="text"
        placeholder="Einen Link zu einem Bild hinzufügen"
      />
      <fieldset>
        <legend>Nährwerte pro Portion</legend>
        <input
          v-model="recipe.nutritionalValues.name"
          class="input_block"
          type="text"
          placeholder="Name"
        />
        <input
          v-model="recipe.nutritionalValues.value"
          class="input_block"
          type="text"
          placeholder="Value"
        />
        <input
          v-model="recipe.nutritionalValues.dayQuota"
          class="input_block"
          type="text"
          placeholder="dayQuota"
        />
      </fieldset>

      <fieldset>
        <legend>Zutaten</legend>
        <input
          v-model="recipe.ingredients.name"
          class="input_block"
          type="text"
          placeholder="Name"
        />
        <input
          v-model="recipe.ingredients.mass"
          class="input_block"
          type="text"
          placeholder="Mass"
        />
        <input
          v-model="recipe.ingredients.unity"
          class="input_block"
          type="text"
          placeholder="Unity"
        />
      </fieldset>
      <input
        v-model="recipe.steps"
        class="input"
        type="text"
        placeholder="Zubereitung"
      />
      <div>
        <input
          v-model="recipe.time"
          class="input_block"
          type="text"
          placeholder="Zubereitungszeit"
        />
        <input
          v-model="recipe.levelOfDifficulty"
          class="input_block"
          type="text"
          placeholder="Schwierigkeitsgrad"
        />
        <input
          v-model="recipe.nutritionalScore"
          class="input_block"
          type="text"
          placeholder="Nutri-Score"
        />
        <button class="btn" @click="createRecipe">Create</button>
      </div>
    </form>
  </div>
</template>
<script>
import SearchBar from "@/components/features/dashboard/components/SearchBar";
export default {
  components: { SearchBar },
  data() {
    return {
      recipe: {
        name: "",
        imageLink: "",
        time: "",
        levelOfDifficulty: "",
        nutritionalScore: "",
        ingredients: [{ name: "", mass: "", unity: "" }],
        nutritionalValues: [{ name: "", value: "", dayQuota: "" }],
        steps: [""],
      },
    };
  },
  methods: {
    createRecipe() {
      this.recipe = {
        name: "",
        imageLink: "",
        time: "",
        levelOfDifficulty: "",
        nutritionalScore: "",
        ingredients: [{ name: "", mass: "", unity: "" }],
        nutritionalValues: [{ name: "", value: "", dayQuota: "" }],
      };
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
form {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
}
.input {
  border: 1px solid teal;
  padding: 10px 15px;
  margin: 15px 0 15px;
}
.input_block {
  display: inline-block;
  margin: 15px 15px 15px;
  border: 1px solid teal;
  padding: 10px 15px;
}
.btn {
  margin-top: 15px;
  margin-left: 15px;
  padding: 5px 10px;
  border-radius: 15px;
  border: 2px solid teal;
  background: none;
  color: teal;
}
fieldset {
  color: teal;
  margin-bottom: 15px;
}
</style>
