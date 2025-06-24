<script setup lang="ts">
import {useMainStore} from '~/stores/main'

const store = useMainStore()
store.regionName = useRoute().params.region as string

definePageMeta({
    layout: false,
})
</script>

<template>
    <RegionDetails v-if="store.mapRegion" :region="store.mapRegion"  />
</template>