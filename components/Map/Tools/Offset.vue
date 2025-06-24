<script setup lang="ts">
const store = useMainStore()

const update = (n: number) => {
    if (store.timeline) {
        store.setOffset(store.timeline.offset + n )
    }
}
</script>

<template>
    <div class="Offset">

        <UButton
            :disabled="store.timeline?.offset === 0"
            icon="i-lucide-arrow-left"
            size="md" color="primary"
            variant="solid"
            @click="update(-1)" />

        <UButton
            :disabled="store.timeline?.offset === store.timeline?.length"
            icon="i-lucide-arrow-right"
            size="md" color="primary"
            variant="solid"
            @click="update(1)" />
    </div>
</template>


<style lang="scss" scoped>
.Offset {
    display: flex;
    gap: 8px;

    :deep(button[disabled]) {
        opacity: 0.2;
    }
}
</style>
