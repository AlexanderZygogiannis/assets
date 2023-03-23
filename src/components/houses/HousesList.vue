<template>
  <div>
    <div class="font-semibold text-lg mb-4">List</div>

    <div class="grid grid-rows-2 gap-2">
      <div v-for="house in houses" :key="house.uuid">
        <HouseItem :house="house" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IHouse } from "@/interface/IHouse";
import HouseItem from "./HouseItem.vue";

export default Vue.extend({
  name: "AssetsList",
  components: {
    HouseItem,
  },
  computed: {
    houses(): IHouse {
      return this.$store.state.houses;
    },
  },
  created() {
    this.$store.dispatch("fetchHouses");
  },
});
</script>
