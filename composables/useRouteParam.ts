import {maps} from '~/data/maps'
import {useMainStore} from '~/stores/main'

export const useRouteParam = () => {
    const store = useMainStore()
    const mapName = useRoute().params.map as string
    const allowedMaps = maps.map(m => m.title.toLowerCase())
    const allowedMap = ref(false)

    if (!allowedMaps.includes(mapName)) {
        allowedMap.value = false
        throw new Error(
            `Map "${mapName}" is not allowed. Allowed maps are: ${allowedMaps.join(', ')}`,
        )
    }  else {
        allowedMap.value = true
        store.mapName = mapName
    }

    return {
        allowedMap
    }
}