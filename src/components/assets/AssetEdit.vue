<template>
    <v-dialog v-model="dialog" content-class="border-solid border-2 p-4 bg-white test">
        <!-- Dialog Trigger -->
        <template #activator="{ on }">
            <button v-ripple v-on="on">
                Edit
            </button>
        </template>

        <!-- Dialog Content -->
        <div>
            <form ref="editForm">
                <v-text-field v-model="title" name='title' label='Title' required />
                <v-text-field v-model="bathrooms" name="bathrooms" label='Bathrooms' required />
                <!-- <v-text-field v-model="bedrooms" label='Bedrooms' required />
            <v-text-field v-model="description" label='Description' required />
            <v-text-field v-model="postalCode" label='Postal Code' required />
            <v-text-field v-model="price" label='Price' required />
            <v-text-field v-model="size" label='Size' required />
            <v-text-field v-model="street" label='Street' required />
            <v-text-field v-model="streetNumber" label='Street Number' required />
            <v-text-field v-model="availableFrom" label='Available' required /> -->

            </form>
        </div>

        <div>
            <button @click="closeDialog">Close</button>
            <button @click="edit">Save</button>
        </div>
    </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { IAsset } from '@/interface/IAssets';
import { PropType } from 'vue/types/v3-component-props';
import { assets } from '@/api/assets';

export default Vue.extend({
    name: 'AssetItem',
    data: () => ({
        dialog: false,
        valid: true,
        title: '',
        bathrooms: 0,
        bedrooms: 0,
        description: '',
        floor: 0,
        postalCode: '',
        price: '',
        size: 0,
        street: '',
        streetNumber: '',
        availableFrom: ''
    }),
    props: {
        asset: {
            required: true,
            type: Object as PropType<IAsset>
        },
    },
    methods: {
        closeDialog(): void {
            this.dialog = false
        },
        edit() {
            const form = this.$refs.editForm as HTMLFormElement;
            const formData = new FormData(form);

            for (const [key, value] of formData) {
                console.log('Key: ' + key + '| Value: ' + value)
            }
        }
    },
    created() {
        this.title = this.asset.title
        this.bathrooms = this.asset.bathrooms
        this.bedrooms = this.asset.bedrooms
        this.description = this.asset.description
        this.floor = this.asset.floor
        this.postalCode = this.asset.postal_code
        this.price = this.asset.price
        this.size = this.asset.size
        this.street = this.asset.street
        this.streetNumber = this.asset.street_number
        this.availableFrom = this.asset.available_from

        // axios.put(`https://assignment.prosperty-mgmt.dev/v1/listings/4e7694ca-84fb-419b-99ae-169fa2944008`, {
        //     amenities: [
        //         "Refrigerator",
        //         "Microwave"
        //     ],
        //     : 2,
        //     : 2,
        //     : "Hello!",
        //     : 0,
        //     latitude: "21.12313",
        //     longitude: "-13.2324",
        //     : "12312",
        //     : "200100.0000",
        //     size: 703,
        //     street: "Vivien Loafs",
        //     street_number: "535",
        //     title: "Test Detached 700sq.m",
        //     type_id: 'ff28d0d0-1e62-47d8-b1cb-f96b538d86e5',
        //     available_from: "2022-12-12"
        // }).then((response) => console.log(2, response.data))
    }
})
</script>