<script setup lang="ts">
import type {SignalingSystem, SignalingSystemThreshold} from '~/types'

const props = defineProps<{
    signalingSystem: SignalingSystem;
}>()

const getBackground = (threshold: SignalingSystemThreshold) => {
    let index, color1, color2
    // maybe move to store
    const colorSetting = 'regular'
    index = props.signalingSystem.thresholds.indexOf(threshold)
    if (index === 0 || index === props.signalingSystem.thresholds.length - 1) {
        return threshold.color[colorSetting]
    } else {
        color1 = threshold.color[colorSetting]
        color2 = props.signalingSystem.thresholds[index + 1].color[colorSetting]
        return (
            'linear-gradient(180deg, ' +
            color1 +
            ' 0%, ' +
            color2 +
            ' 120%)'
        )
    }
}

const getValue = (threshold: SignalingSystemThreshold) => {
    if (threshold.label) {
        return threshold.label
    } else {
        return thresholdTools.getNumber(props.signalingSystem, threshold)
    }
}
</script>

<template>
    <div class="MapLegendGradient">
        <div
            v-for="(threshold, index) in signalingSystem.thresholds"
            :key="index"
            class="threshold"
        >
            <div
                :style="{ background: getBackground(threshold) }"
                class="threshold__swatch"
            />
            <div class="threshold__cases">
                {{ getValue(threshold) }}
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.MapLegendGradient {
    .threshold {

        &__swatch {
            width: 12px;
            height: 17px;
            margin-right: 4px;
            border: 1px solid #ddd;
            margin-bottom: -1px;
        }
    }
}
</style>
