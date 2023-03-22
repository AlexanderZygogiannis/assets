<template>
  <div data-app class="container mx-auto p-4">
    <HouseFilter />
    <HouseList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import HouseList from "@/components/houses/HousesList.vue";
import HouseFilter from "@/components/houses/HousesFilter.vue";

export default Vue.extend({
  name: "App",

  components: {
    HouseList,
    HouseFilter,
  },
});
</script>
