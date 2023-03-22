<template>
  <ul class="flex justify-center p-4">
    <li class="mr-6">
      <router-link
        class="font-semibold text-lg text-blue-500 hover:text-blue-800"
        to="/"
      >
        Home
      </router-link>
    </li>
    <li class="mr-6">
      <router-link
        class="font-semibold text-lg text-blue-500 hover:text-blue-800"
        to="/houses"
      >
        Houses
      </router-link>
    </li>
    <li class="mr-6">
      <router-link
        class="font-semibold text-lg text-blue-500 hover:text-blue-800"
        to="/portfolio"
      >
        Portfolio
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderView",
});
</script>
