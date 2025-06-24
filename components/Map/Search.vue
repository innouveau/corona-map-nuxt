<script setup lang="ts">
const store = useMainStore()

</script>

<template>
    <div class="Search">
        <input v-if="!store.hoveredRegion"
                        type="text"
            placeholder="Zoeken..."
        >
        <div v-if="store.hoveredRegion" class="Search__hovered">
            {{ store.hoveredRegion?.title }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.Search {
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    display: flex;

    input {
        border: 0;
        height: 100%;
        padding: 10px;
        outline: none;
        font-family: inherit;
        font-size: inherit;
        line-height: 1;
        display: flex;
        align-items: center;

        &:focus-visible {
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        }
    }

    &__hovered {
        line-height: 1;
        position: absolute;
        height: 100%;
        padding: 10px;
        color: #888;
        display: flex;
        align-items: center;
    }
}

</style>
