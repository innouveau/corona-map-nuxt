<script setup lang="ts">
import type { RegionProps } from '~/types'

defineProps<RegionProps>()
</script>

<template>
    <div class="Head">
        <div class="Head__title">
            {{ region.title }}
        </div>
        <div
            class="Head__increase"
        >
            xxx
            <span class="abs-rel">rel</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.Head {
    font-size: 20px;
    line-height: 1.2;
    display: flex;
    align-items: flex-start;
    font-family: var(--serif), serif;
    border-bottom: 2px solid #000;
    padding-bottom: 12px;
    font-weight: 700;
    height: 82px;

    &__title {
        margin-right: 8px;
    }

    &__increase {
        font-size: 12px;
        display: flex;

        .abs-rel {
            margin-left: 2px;
        }
    }
}
</style>
