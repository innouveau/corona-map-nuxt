<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const store = useMainStore()

const mapTitle = computed(() => store.map?.title)
</script>

<template>
	<nav>
		<h1>
			Corona <b>{{ mapTitle }}</b>
		</h1>
	</nav>
</template>

<style lang="scss" scoped>
nav {
    align-items: center;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;

    h1 {
        font-size: 20px;
        font-family: 'Merriweather', serif;
        border-right: 1px solid #ddd;
        padding: 8px 16px;
        height: 100%;
        white-space: nowrap;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 4px;

        b {
            text-transform: capitalize;
        }
    }
}
</style>
