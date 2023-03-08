<template>
  <div data-app class="container mx-auto p-4">
    <AssetFilter />
    <AssetList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AssetList from '@/components/assets/AssetList.vue';
import AssetFilter from '@/components/assets/AssetFilter.vue';


export default Vue.extend({
  name: 'App',

  components: {
    AssetList,
    AssetFilter
  }
});
</script>
