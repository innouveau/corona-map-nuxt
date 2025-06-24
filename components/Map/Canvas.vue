<script setup lang="ts">
import type { Region } from '~/classes'
import type { DrawSettings, MapProps } from '~/types'
import { useMainStore } from '~/stores/main'
import {getRegionForPoint} from '~/utils/canvas'
const router = useRouter()

const props = defineProps<MapProps>()

const mapRenderKey = useId()
const store = useMainStore()

const el = ref<HTMLCanvasElement | null>(null)

const width = ref()
const height = ref()

const measure = (canvas: HTMLCanvasElement) => {
    const parent = canvas.parentElement
    width.value = parent ? parent.clientWidth : 400
    height.value = parent ? parent.clientHeight : 400
}

const clearCanvas = () => {
    // console.log("clear");
}

const selectRegion = (region: Region) => {
    router.push({
        params: {
            region: region.title.toLowerCase(),
        },
    })
}

const addClickEvents = (canvas: HTMLCanvasElement) => {
    canvas.addEventListener(
        'click',
        (event: MouseEvent) => {
            const region = getRegion(canvas, event)
            if (region) {
                selectRegion(region)
            }
        },
        false
    )
}

const getRegion = (canvas: HTMLCanvasElement, event: MouseEvent) => {
    const x = event.offsetX
    const y = event.offsetY
    return getRegionForPoint(canvas, store.map, x, y, mapRenderKey)
}

const drawMap = (canvas: HTMLCanvasElement) => {
    clearCanvas()
    const ctx = canvas.getContext('2d')
    const mapConfig = store.mapConfig
    if (ctx && mapConfig && store.timeline && store.mapData) {
        const settings: DrawSettings = {
            key: mapRenderKey,
            design: {
                fill: true,
                border: true,
            },
            map: {
                ...mapConfig.settings.map,
                scale: 2.2,
            },
            navigation: {
                zoom: 100,
                position: {
                    x: 0,
                    y: 0,
                },
            },
            container: {
                width: width.value,
                height: height.value,
            },
            // canvas,
        }

        console.log("draw");

        draw(
            ctx,
            props.map,
            store.mapData,
            store.signalingSystem,
            store.timeline,
            settings,
            'regular',
        )
    }
}

const init = async () => {
    if (el.value) {
        measure(el.value)
        addClickEvents(el.value)
        setTimeout(() => {
            drawMap(el.value as HTMLCanvasElement)
        }, 1000)
    }
}

// watch(
//     () => store.timeline?.offset,
//     () => {
//         drawMap(el.value as HTMLCanvasElement)
//     }
// )

onMounted(init)
</script>

<template>
    <canvas
        ref="el"
        :width="width"
        :height="height"
    />
</template>
