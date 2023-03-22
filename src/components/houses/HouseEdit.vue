<template>
  <v-dialog
    v-model="dialog"
    content-class="border-solid border-2 p-4 bg-white max-w-md"
  >
    <!-- Dialog Trigger -->
    <template #activator="{ on }">
      <button
        class="absolute top-0 right-0 p-3 font-semibold"
        v-ripple
        v-on="on"
      >
        Edit
      </button>
    </template>

    <!-- Dialog Content -->
    <div>
      <h3 class="mb-2 text-xl font-medium leading-tight">Edit Asset</h3>
      <form ref="editForm">
        <v-text-field v-model="title" name="title" label="Title" required />
        <v-text-field
          v-model="bathrooms"
          name="bathrooms"
          label="Bathrooms"
          required
        />
        <v-text-field v-model="bedrooms" label="Bedrooms" required />
        <v-text-field v-model="description" label="Description" required />
        <v-text-field v-model="postalCode" label="Postal Code" required />
        <v-text-field v-model="price" label="Price" required />
        <v-text-field v-model="size" label="Size" required />
        <v-text-field v-model="street" label="Street" required />
        <v-text-field v-model="streetNumber" label="Street Number" required />
        <v-text-field v-model="availableFrom" label="Available" required />
      </form>
    </div>

    <div class="flex items-center justify-center">
      <button
        @click="closeDialog"
        type="button"
        class="inline-block rounded bg-primary text-white bg-blue-600 px-6 pt-2.5 pb-2 mr-5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      >
        Close
      </button>
      <button
        @click="edit"
        type="button"
        class="inline-block rounded bg-primary text-white bg-blue-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      >
        Save
      </button>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import axios from "axios";
import { IHouse } from "@/interface/IHouse";
import { PropType } from "vue/types/v3-component-props";

export default Vue.extend({
  name: "AssetItem",
  data: () => ({
    dialog: false,
    title: "",
    bathrooms: 0,
    bedrooms: 0,
    description: "",
    postalCode: "",
    price: "",
    size: 0,
    street: "",
    streetNumber: "",
    availableFrom: "",
    id: "0",
    typeId: "0",
  }),
  props: {
    asset: {
      required: true,
      type: Object as PropType<IHouse>,
    },
  },
  methods: {
    closeDialog(): void {
      this.dialog = false;
    },
    edit() {
      let formData = {
        title: this.title,
        available_from: this.availableFrom,
        bedrooms: this.bedrooms,
        bathrooms: this.bathrooms,
        description: this.description,
        postal_code: this.postalCode,
        price: this.price,
        size: this.size,
        street: this.street,
        street_number: this.streetNumber,
        type_id: this.typeId,
        amenities: this.asset.amenities,
      };

      axios
        .put(
          `https://assignment.prosperty-mgmt.dev/v1/listings/${this.id}`,
          formData
        )
        .then(() => {
          this.$store.dispatch("fetchAssets");
          this.closeDialog();
        });
    },
  },
  created() {
    this.id = this.asset.uuid;
    this.typeId = this.asset.type.uuid;
    this.title = this.asset.title;
    this.postalCode = this.asset.postal_code;
    this.price = this.asset.price;
    this.size = this.asset.size;
    this.street = this.asset.street;
    this.streetNumber = this.asset.street_number;
    this.bathrooms = this.asset.bathrooms;
    this.bedrooms = this.asset.bedrooms;
    this.description = this.asset.description;
    this.availableFrom = moment(String(this.asset.available_from)).format(
      "YYYY-MM-DD"
    );
  },
});
</script>
