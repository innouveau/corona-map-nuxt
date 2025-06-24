<script setup lang="ts">
import {useMainStore} from '~/stores/main'

const store = useMainStore()
store.regionName = useRoute().params.region as string

const {allowedMap} = useRouteParam()

definePageMeta({
    layout: false,
})
</script>

<template>
    <NuxtLayout
        v-if="allowedMap"
        name="map"
    />
</template>