<template>
    <div class="Cell">
        <slot />
    </div>
</template>


<style lang="postcss" scoped>
.Cell {
    font-family: 'Inconsolata', Courier, monospace;
    padding: 0 12px;
    border-right: 1px solid var(--border-color);
    height: 100%;
    display: flex;
    align-items: center;

    &:last-child {
        border-right: none;
    }
}
</style>
