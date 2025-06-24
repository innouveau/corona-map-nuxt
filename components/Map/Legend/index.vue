<script setup lang="ts">
import type { SignalingSystem } from '~/types'

defineProps<{
    signalingSystem: SignalingSystem;
}>()
</script>

<template>
    <div class="Legend">
        <MapLegendGradient :signaling-system="signalingSystem" />
    </div>
</template>


<style lang="scss" scoped>
.Legend {
    // pointer-events: none;

    :deep(.threshold) {
        display: flex;
        align-items: center;
        font-size: 9px;
    }
}
</style>
