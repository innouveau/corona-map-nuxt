<script setup lang="ts">
interface Props {
    value: number
}

const props = defineProps<Props>()

const height = computed(() => {
    return Math.round(props.value / 50) + 'px'
})
</script>

<template>
    <div class="Bar" :style="{height: height}" />
</template>


<style lang="scss" scoped>
.Bar {
    background: rgba(0, 0, 0, 0.15);
    width: 2px;
    flex-grow: 1;
}
</style>

