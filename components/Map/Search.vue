<script setup lang="ts"></script>

<template>
    <input
        type="text"
        placeholder="Zoeken..."
        class="Search"
    >
</template>

<style lang="scss" scoped>
input {
    background: #fff;
    border: 0;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    height: 100%;
    padding: 10px;
    outline: none;

    &:focus-visible {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
}
</style>
