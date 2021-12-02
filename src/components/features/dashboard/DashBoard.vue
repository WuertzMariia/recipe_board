<template>
  <SearchBar />
  <v-container>
    <div class="display__flex__row">
      <div v-for="item in recipes" :key="item.imageLink" class="mx-3 my-4">
        <v-card :loading="loading" max-width="374">
          <template v-slot:progress>
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img
            height="250"
            :src="item.imageLink"
            class="dashboard__image__style"
          ></v-img>

          <v-card-title>{{ item.name }}</v-card-title>

          <v-card-text>
            <div class="my-1 text-subtitle-1">Zubereitung: {{ item.time }}</div>
            <div class="my-1 text-subtitle-1">
              Schwierigkeitsgrad: {{ item.levelOfDifficulty }}
            </div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>ErnährWert</v-card-title>
          <v-card-text>
            <v-container
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <div class="text-center">
                <v-rating
                  v-model="item.nutritionalScore"
                  readonly="true"
                ></v-rating>
              </div>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Ansehen
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
<style>
@import "./../../../assets/styles.css";
</style>
<script>
import SearchBar from "@/components/features/dashboard/components/SearchBar";
export default {
  components: { SearchBar },
  data() {
    return {
      currentRecipe: "",
      loading: false,
      selection: 1,
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  mounted() {},
  computed: {
    recipes() {
      if (this.$store.state.currentSearchValue.length !== 0) {
        return this.$store.getters.getCurrentRecipes.filter((item) =>
          item.name
            .toLowerCase()
            .includes(this.$store.state.currentSearchValue.toLowerCase())
        );
      } else {
        return this.$store.getters.getCurrentRecipes;
      }
    },
  },
};
</script>
