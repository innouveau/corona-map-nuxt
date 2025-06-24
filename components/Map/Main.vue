<script setup lang="ts">
import type { MapProps } from '~/types'

defineProps<MapProps>()
const store = useMainStore()
</script>

<template>
    <div class="Main">
        <MapCanvas :map="map" />
        <MapLegend :signaling-system="store.signalingSystem" />
    </div>
</template>

<style lang="scss" scoped>
.Main {
    height: 100%;
    position: relative;

    .Legend {
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>