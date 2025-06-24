<script setup lang="ts">
import {useMainStore} from '~/stores/main'

definePageMeta({
    layout: false,
})

const {allowedMap} = useRouteParam()
const store = useMainStore()
store.regionName = ''
</script>

<template>
    <NuxtLayout
        v-if="allowedMap"
        name="map"
    />
</template>
