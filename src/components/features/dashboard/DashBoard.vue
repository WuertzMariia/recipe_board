<template>
  <SearchBar />
  <div class="dashboard__container">
    <div class="display__flex__row">
      <div v-for="item in recipes" :key="item.imageLink" class="mx-3 my-4">
        <!-- TODO when recipes are complete make sure only 8-12 recipes are loaded -->
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
            <v-btn color="deep-purple lighten-2" text>Ansehen</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>
<style>
@import "./../../../assets/styles.css";
</style>
<script>
import SearchBar from "@/components/features/dashboard/components/SearchBar";
import { recipes } from "@/store/data/recipes";

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
    loadItems() {
      window.onscroll = () => {
        let bottomOfWindow =
          window.innerHeight + window.scrollY >= document.body.scrollHeight;
        if (bottomOfWindow && this.$store.state.loadedItems <= recipes.length) {
          return this.$store.commit("incrementLoadedItems", 4);
        }
      };
    },
  },
  mounted() {
    /** load more data */
    this.$nextTick(function () {
      window.addEventListener("scroll", this.loadItems);
      this.loadItems(); // needed for initial loading on page
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.loadItems);
  },
  computed: {
    recipes() {
      /** filters recipes to display on dashboard by search value and category */
      let storage = this.$store.getters.getCurrentRecipes;
      if (this.$store.state.currentSearchValue.length !== 0) {
        storage = storage.filter((item) =>
          item.name
            .toLowerCase()
            .includes(this.$store.state.currentSearchValue.toLowerCase())
        );
      }
      if (this.$store.state.currentCategories.length !== 0) {
        storage = storage.filter((item) => {
          return this.$store.state.currentCategories.every((selectedItem) =>
            item.categories.includes(selectedItem)
          );
        });
      }
      return Object.fromEntries(
        Object.entries(storage).slice(0, this.$store.state.loadedItems)
      );
    },
  },
};
</script>
