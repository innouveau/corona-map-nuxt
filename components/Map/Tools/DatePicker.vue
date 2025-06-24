<script setup lang="ts">
import type {TimelineProps} from '~/types'
import type {CalendarDate} from '@internationalized/date'
import {DateFormatter} from '@internationalized/date'
import {getOffsetFromDates} from '~/utils/data'

const props = defineProps<TimelineProps>()
const store = useMainStore()

const minDate = dateToCalendarDate(props.timeline.start, 0)
const maxDate = dateToCalendarDate(props.timeline.start, props.timeline.length - 1)
const start = dateToCalendarDate(props.timeline.start, props.timeline.offset)
const v = ref(start)

const df = new DateFormatter('nl-NL', {
    dateStyle: 'medium'
})

const label = computed(() => {
    return df.format(v.value.toDate())
})

const atUpdate = (d: CalendarDate) => {
    const offset = getOffsetFromDates(d, minDate)
    store.setOffset(offset)
}

watch(
    () => store.timeline?.offset,
    (o: number) => {
        v.value = dateToCalendarDate(props.timeline.start, o)
    }
)


</script>

<template>
    <UPopover>
        <UButton id="date-picker-button" color="neutral" variant="subtle" icon="i-lucide-calendar">
            {{ label }}
        </UButton>

        <template #content>
            <UCalendar
                v-model="v"
                class="p-2"
                :min-value="minDate"
                :max-value="maxDate"
                @update:model-value="atUpdate"

            />
        </template>
    </UPopover>
</template>

<style lang="scss">
#date-picker-button {
    white-space: nowrap;
    width: 120px;
    flex-shrink: 0;
    flex-grow: 0;
}

td[aria-disabled="true"] {
    position: relative;
    pointer-events: none;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 2px; /* dikte van de lijn */
        background-color: red;
        transform-origin: center;
    }

    &::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
}
</style>


