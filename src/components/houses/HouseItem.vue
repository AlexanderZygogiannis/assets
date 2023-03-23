<template>
  <div>
    <div
      class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden p-4 relative"
    >
      <span
        class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"
      >
        {{ house.type.name }}
      </span>
      <h2 class="mt-2 mb-2 font-bold">
        {{ house.title }}
      </h2>
      <p class="text-sm mb-3">
        {{ house.description }}
      </p>
      <div class="flex items-center border-b pt-2 pb-2">
        <span class="text-sm font-semibold mr-3">Size:</span>
        <span class="text-l">
          {{ house.size }}
        </span>
      </div>
      <div class="flex items-center border-b pt-2 pb-2">
        <span class="text-sm font-semibold mr-3">Address:</span>
        <span class="flex items-center text-l">
          {{ house.street }} - {{ house.street_number }} -
          {{ house.postal_code }}
        </span>
      </div>
      <div class="flex items-center pt-2 pb-2">
        <div class="flex items-center mr-3">
          <span class="text-sm font-semibold mr-3">Created:</span>
          <span class="flex items-center text-l">
            {{ house.created_at | formatDate }}
          </span>
        </div>
        <div class="flex items-center">
          <span class="text-sm font-semibold mr-3">Updated:</span>
          <span class="flex items-center text-l">
            {{ house.updated_at | formatDate }}
          </span>
        </div>
      </div>
      <HouseEdit :house="house" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { IHouse } from "@/interface/IHouse";
import HouseEdit from "./HouseEdit.vue";

export default Vue.extend({
  name: "HouseEdit",
  components: {
    HouseEdit,
  },
  props: {
    house: {
      required: true,
      type: Object as PropType<IHouse>,
    },
  },
});
</script>
