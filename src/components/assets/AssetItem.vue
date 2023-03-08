<template>
    <div>
        <div class="border-solid border-2 p-4">
            <h1>{{ asset.title }}</h1>
            <div>Type: {{ asset.type.name }}</div>
            <div>Size: {{ asset.size }}</div>
            <div>Address: {{ asset.street }} - {{ asset.street_number }} - {{ asset.postal_code }}</div>
            <div>Description: {{ asset.description }}</div>
            <div>Created: {{ asset.created_at }}</div>
            <div>Updated: {{ asset.updated_at }}</div>
        </div>
        <AssetEdit :asset="asset" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { IAsset } from '@/interface/IAssets';
import { PropType } from 'vue/types/v3-component-props';
import AssetEdit from './AssetEdit.vue';

export default Vue.extend({
    name: 'AssetItem',
    components: {
        AssetEdit
    },
    props: {
        asset: {
            required: true,
            type: Object as PropType<IAsset>
        }
    }
})
</script>