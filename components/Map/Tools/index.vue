<script setup lang="ts">
const store = useMainStore()
const regionData = computed(() => store.regionData)
</script>

<template>
    <div class="Tools">
        <MapToolsDatePicker v-if="store.timeline?.start" :timeline="store.timeline" />
        <MapToolsGraph v-if="store.timeline?.start && regionData" :timeline="store.timeline" :region-data="regionData" />
        <MapToolsOffset v-if="store.timeline?.start" />
    </div>
</template>

<style lang="scss" scoped>
.Tools {
    display: flex;
    gap: 12px;
    align-items: center;
}
</style>
