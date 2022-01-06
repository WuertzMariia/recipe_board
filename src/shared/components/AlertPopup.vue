<template>
  <v-alert v-if="type === 'success'" class="alert-success" type="success">
    Rezept erfolgreich gespeichert
  </v-alert>
  <v-alert
    v-if="type === 'url_validation_error'"
    class="alert-danger"
    type="error"
  >
    Falsche URL Adresse!
  </v-alert>
  <v-alert
    v-if="type === 'name_validation_error'"
    class="alert-danger"
    type="error"
  >
    Der Name muss mindestens 5 Zeichen enthalten!
  </v-alert>
  <v-alert v-if="type === 'general'" class="alert-danger" type="error">
    Dies ist ein Pflichtfeld!
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
