<template>
  <h3 class="ml-3">Nährwerte pro Portion</h3>
  <v-container>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Nährstoff</th>
          <th></th>
          <th>Tagesanteil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in recipe.nutritionalValues" :key="index">
          <td>{{ value.name }}</td>
          <td>{{ value.value }}</td>
          <td>{{ value.dayQuota }}</td>
        </tr>
      </tbody>
    </table>
  </v-container>
</template>
<style>
@import "../../../../assets/styles.css";
</style>
<script>
export default {
  props: ["recipe"],
  data() {
    return {};
  },
  methods: {},
  beforeMount() {},
};
</script>
