<template>
  <div>
    <v-app class="view_container">
      <Dashboard />
    </v-app>
  </div>
</template>

<script>
import Dashboard from "@/components/features/dashboard/DashBoard";

export default {
  name: "HomePage",
  components: {
    Dashboard,
  },
};
</script>
