<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const store = useMainStore()

const mapTitle = computed(() => store.mapConfig?.title)

const totalNumbers = computed(() => {
    const n = store.totalNumber;
    if (n > 0) {
        return '+' + n
    } else if (n < 0) {
        return '-' + n
    } else {
        return n;
    }
})
</script>

<template>
	<nav>
        <NavCell>
            <h1>
                Corona <b>{{ mapTitle }}</b>
            </h1>
        </NavCell>

        <NavCell>
            <NavDate v-if="store.timeline && store.timeline.start" :timeline="store.timeline" />
        </NavCell>

        <NavCell>
            {{totalNumbers}}
        </NavCell>
	</nav>
</template>

<style lang="scss" scoped>
nav {
    align-items: center;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    position: relative;

    h1 {
        font-size: 20px;
        font-family: 'Merriweather', serif;
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
