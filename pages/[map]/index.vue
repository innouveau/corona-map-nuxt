<script setup lang="ts">
import {useMainStore} from '~/stores/main'

definePageMeta({
    layout: false,
})


const {allowedMap} = useRouteParam()
const store = useMainStore()
store.regionName = ''
</script>

<template v-if="allowedMap">
    <section id="map">
        <Map />
    </section>

    <!--            <section id="region-details">-->
    <!--                <NuxtPage />-->
    <!--            </section>-->
</template>

<style lang="scss" scoped>
#map {
    width: 50%;
    height: 100%;
}

#region-details {
    width: 50%;
    height: 100%;
    overflow-y: auto;
}
</style>
