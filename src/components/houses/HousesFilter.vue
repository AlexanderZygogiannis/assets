<template>
  <div>
    <div class="font-semibold text-lg">Filters</div>
    <div class="flex flex-col md:flex-row">
      <div class="flex-1 p-2">
        <v-select
          v-model="selectedAmenities"
          :items="amenities"
          attach
          chips
          label="Amenities"
          multiple
        />
      </div>
      <div class="flex-1 p-2">
        <v-select
          v-model="selectedTypes"
          :items="types"
          item-text="name"
          item-value=""
          attach
          chips
          label="Types"
          multiple
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Types } from "@/types/Types";

export default Vue.extend({
  name: "AssetFilter",
  data: () => ({
    selectedAmenities: [],
    selectedTypes: [],
  }),
  computed: {
    amenities() {
      return this.$store.state.amenities;
    },
    types() {
      return this.$store.state.types;
    },
  },
  created() {
    this.$store.dispatch("fetchAmenities");
    this.$store.dispatch("fetchTypes");
  },
  watch: {
    /**
     *
     */
    selectedTypes(): void {
      let mutationTypes = this.selectedTypes.map((val) => Types[val]);
      const typeFilter = mutationTypes.toString();

      this.$store.dispatch("fetchTypeFilter", typeFilter);
      // this.selectedAmenities = []
    },
    /**
     *
     */
    selectedAmenities(): void {
      const anemitiesFilter = this.selectedAmenities.toString();

      this.$store.dispatch("fetchAmenitiesFilter", anemitiesFilter);
      this.selectedTypes = [];
    },
  },
});
</script>
