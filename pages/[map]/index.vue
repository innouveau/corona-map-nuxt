<script setup lang="ts">
definePageMeta({
    layout: false,
})


const {allowedMap} = useRouteParam()
</script>

<template>
    <NuxtLayout
        v-if="allowedMap"
        name="map"
    />
</template>

<style lang="scss" scoped>
#map {
    width: 50%;
    height: 100%;
}

#region-details {
    width: 50%;
    height: 100%;
    overflow-y: auto;
}
</style>
