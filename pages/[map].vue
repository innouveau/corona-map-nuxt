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
    >
        <NuxtPage />
    </NuxtLayout>
</template>