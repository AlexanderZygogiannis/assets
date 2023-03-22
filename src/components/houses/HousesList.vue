<template>
  <div>
    <div class="font-semibold text-lg mb-4">List</div>

    <div class="grid grid-rows-2 gap-2">
      <div v-for="asset in assets" :key="asset.uuid">
        <HouseItem :asset="asset" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HouseItem from "./HouseItem.vue";

export default Vue.extend({
  name: "AssetsList",
  components: {
    HouseItem,
  },
  computed: {
    assets() {
      return this.$store.state.assets;
    },
  },
  created() {
    this.$store.dispatch("fetchAssets");
  },
});
</script>
