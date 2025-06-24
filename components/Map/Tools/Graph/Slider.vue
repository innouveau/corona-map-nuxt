<script setup lang="ts">
import type {TimelineProps} from '~/types'

const props = defineProps<TimelineProps>()
const store = useMainStore()

const value = ref(props.timeline.offset)
const min = 0
const max = props.timeline.length - 1

const atUpdate = (offset: number) => {
    store.setOffset(offset)
}
</script>

<template>
    <div class="Slider">
        <USlider v-model="value" :min="min" :max="max" color="secondary" @update:model-value="atUpdate" />
    </div>
</template>