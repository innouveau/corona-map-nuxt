<script setup lang="ts">
import type {Region} from '~/classes'
import type {RegionData, Timeline} from '~/types'

interface Props {
    region: Region
    regionData: RegionData
    timeline: Timeline
}

const props = defineProps<Props>()

const weeks = 4
const days = weeks * 7
const max = 1500

const set = computed(() => {
    const s = []
    for (let i = 0; i < days; i++) {
        const index = props.timeline.offset - days + 1 + i
        const item = {
            value: 0,
            date: null, // todo
        }
        if (index < 0) {
            item.value = 0
        } else {
            item.value = props.regionData.numbers[index] || 0
        }
        s.push(item)
    }
    return s
})
</script>

<template>
    <div class="Graph">
        <RegionGraphBar
            v-for="(item, index) in set"
            :key="index"
            :value="item.value"
            :max="max"
            :date="item.date" />
    </div>
</template>


<style lang="scss" scoped>
.Graph {
    height: 200px;
    overflow: hidden;
    background: #ddd;
    display: flex;
    gap: 2px;
    align-items: flex-end;
    max-width: 300px;

    .Bar {
        flex: 1;
    }
}
</style>
