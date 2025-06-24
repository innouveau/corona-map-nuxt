<script setup lang="ts">
import type { RegionProps } from '~/types'

defineProps<RegionProps>()

const store = useMainStore()
const regionData = computed(() => store.regionData)
const timeline = computed(() => store.timeline)
</script>

<template>
	<div  class="Details">
		<RegionHead :region="region" />
        <RegionGraph :region="region" :region-data="regionData" :timeline="timeline" />
	</div>
</template>

<style lang="scss" scoped>
.Details {
    padding: 16px;
}
</style>
