<script setup lang="ts">
import type {TimelineProps} from '~/types'
import {getFormattedDateFromOffset} from "~/utils/data";

const props = defineProps<TimelineProps>()

const date = computed(() => getFormattedDateFromOffset(props.timeline.start, props.timeline.offset))
</script>

<template>
    {{date}}
</template>