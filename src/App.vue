<template>
  <div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
    <Header />  
    <div class="container mx-auto p-4">
      <router-view />
    </div>   
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header
  },

  data: () => ({
    //
  }),
});
</script>
