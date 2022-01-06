<template>
  <v-container>
    <table class="styled-table">
      <thead>
        <tr>
          <th>
            <span v-if="type === 'ingredients'">Zutat</span>
            <span v-if="type === 'nutritionalValues'">Ernäherungswerte</span>
            <span v-if="type === 'steps'">Zwischenschritte</span>
          </th>
          <th></th>
          <th>
            <span v-if="type === 'ingredients'">Einheiten</span>
            <span v-if="type === 'nutritionalValues'">Tagesbedarf</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in tableValues" :key="index">
          <td>
            <span
              v-if="type === 'ingredients' || type === 'nutritionalValues'"
              >{{ value?.name }}</span
            >
            <span v-if="type === 'steps'">{{ value }}</span>
          </td>
          <td>
            <span v-if="type === 'ingredients'">{{ value?.mass }}</span>
            <span v-if="type === 'nutritionalValues'">{{ value?.value }}</span>
          </td>
          <td>
            <span v-if="type === 'ingredients'">{{ value?.unity }}</span>
            <span v-if="type === 'nutritionalValues'">{{
              value?.dayQuota
            }}</span>
          </td>
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
  props: ["addedData", "type"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    tableValues() {
      return JSON.parse(JSON.stringify(this.addedData));
    },
  },
  beforeMount() {
    console.log(this.addedData);
  },
};
</script>
