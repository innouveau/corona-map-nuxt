<script setup lang="ts">
import type {Timeline, RegionData} from '~/types'

interface Props {
    timeline: Timeline,
    regionData: RegionData
}

const props = defineProps<Props>()



</script>

<template>
    <div class="Graph">
        <MapToolsGraphSlider :timeline="timeline" />
        <MapToolsGraphBar
            v-for="(value, index) in props.regionData.numbers"
            :key="index"
            :value="value" />
    </div>
</template>


<style lang="scss" scoped>
.Graph {
    display: flex;
    align-items: flex-end;
    width: calc(100% - 200px);
    height: 32px;
    position: relative;

    .Slider {
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
    }
}
</style>
