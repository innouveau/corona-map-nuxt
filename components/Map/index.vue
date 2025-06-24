<script setup lang="ts">
import * as d3 from 'd3'
import type { MapConfig, SourceKey, CsvData } from '~/types/'
import { useMainStore } from '~/stores/main'

const store = useMainStore()

const loadData = async(mapData: MapConfig, sourceKey: SourceKey) => {
    const source = mapData.data.sources[sourceKey]
    const data: CsvData = await d3.csv(source.url + dateTool.getTimestamp())
    store.setTimeline(store.mapName, data, source)
    store.addData(store.mapName, data, source)
}

const loadMap = async (mapData: MapConfig) => {
    await fetch(mapData.data.geo.source)
        .then(response => response.json())
        .then((json) => {
            store.addMap(store.mapName, json)
        })
}

onMounted(async () => {
    if (store.mapConfig && !store.loaded) {
        await loadMap(store.mapConfig)
        await loadData(store.mapConfig,  'positiveTests')
    }
})
</script>

<template>
    <div
        v-if="store.mapConfig"
        class="Map"
    >
        <MapSearch />

        <div class="Map__main">
            <MapMain
                v-if="store.loaded"
                :map="store.map"
            />
        </div>

        <MapTools />
    </div>
</template>

<style lang="scss" scoped>
.Map {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background: var(--bg);
    height: 100%;

    .Search {
        height: 36px;
        margin-bottom: 12px;
    }

    &__main {
        height: calc(100% - 56px - 36px - 12px);
    }

    .Tools {
        height: 56px;
    }
}
</style>
