<script setup lang="ts">

const store = useMainStore()
const region = computed(() => store.mapRegion)
const regionData = computed(() => store.regionData)
const timeline = computed(() => store.timeline)
</script>

<template>
	<div v-if="region" class="Details">
		<RegionHead :region="region" />
        <RegionGraph :region="region" :region-data="regionData" :timeline="timeline" />
	</div>
</template>

<style lang="scss" scoped>
.Details {
    padding: 16px;
}
</style>
