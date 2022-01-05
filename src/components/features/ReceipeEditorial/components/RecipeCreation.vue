<template>
  <v-form v-model="valid">
    <v-container>
      <h2 class="ml-3 mb-5 mt-5">Rezept anlegen</h2>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Link zum Bild"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Zeit"
            required
          ></v-text-field>
          <div class="d-flex flex-row flex-wrap justify-space-start">
            <span>Ordnen Sie das Rezept den folgenden Kategorien zu:</span>
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

export default {
  data: () => ({
    categories,
    selectionCategory: {
      category: [],
    },
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {},
  beforeMount() {},
};
</script>
