<template>
    <div>
        <h1 class="text-lg text-gray-700 mb-4"> List </h1>

        <div class="grid grid-rows-2 gap-2">
            <div v-for="asset in assets" :key="asset.uuid">
                <AssetItem :asset="asset" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AssetItem from './AssetItem.vue';

export default Vue.extend({
    name: 'AssetsList',
    components: {
        AssetItem
    },
    computed: {
        assets() {
            // console.log('Check', this.$store.state.assets)
            // return this.$store.state.assets
            return [
                {
                    uuid: "4e7694ca-84fb-419b-99ae-169fa2944008",
                    amenities: [
                        "Refrigerator",
                        "Microwave"
                    ],
                    bathrooms: 2,
                    bedrooms: 2,
                    description: "Hello!",
                    floor: 0,
                    latitude: "21.12313",
                    longitude: "-13.2324",
                    postal_code: "12312",
                    price: "200100.0000",
                    size: 703,
                    street: "Vivien Loafs",
                    street_number: "535",
                    title: "Detached 700sq.m",
                    type: "ff28d0d0-1e62-47d8-b1cb-f96b538d86e5",
                    available_from: "2022-12-12T00:00:00+00:00",
                    created_at: "2022-02-07T17:41:32+00:00",
                    updated_at: "2023-02-28T11:29:52+00:00"
                },
                {
                    uuid: "b325f07b-87a8-475f-8ac9-dead44d47164",
                    amenities: [
                        "Nespresso",
                        "Hair Dryer",
                        "Dishwasher",
                        "Elevator",
                        "Balcony"
                    ],
                    bathrooms: 2,
                    bedrooms: 1,
                    description: "testerino",
                    floor: 0,
                    latitude: "25.585466",
                    longitude: "-12.97345",
                    postal_code: "11477",
                    price: "500000.0000",
                    size: 900,
                    street: "Stevie Plaza",
                    street_number: "42",
                    title: "Maisonette 892sq.m",
                    type: "d55777a5-6f63-4ddc-a022-5def1fe0cccb",
                    available_from: "2022-03-11T00:00:00+00:00",
                    created_at: "2022-02-07T17:41:32+00:00",
                    updated_at: "2023-02-28T11:13:31+00:00"
                }
            ]
        }
    },
    created() {
        // this.$store.dispatch('fetchAssets')
    }
})
</script>