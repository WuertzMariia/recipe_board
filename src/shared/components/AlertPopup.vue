<template>
  <v-alert v-if="type === 'success'" class="alert-success" type="success">
    Rezept erfolgreich gespeichert
  </v-alert>
</template>
<style></style>
<script>
export default {
  props: ["type"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
