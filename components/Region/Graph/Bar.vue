<script setup lang="ts">
import type {Region} from '~/classes'
import type {RegionData, Timeline} from '~/types'

interface Props {
    value: number
    max: number
    date: Date | null
}

const props = defineProps<Props>()

const height = computed(() => {
    return Math.round((props.value / props.max) * 100) + '%'
})
</script>

<template>
    <div class="Bar" :style="{height: height}" />
</template>


<style lang="scss" scoped>
.Bar {
    background: #aaa;
}
</style>
