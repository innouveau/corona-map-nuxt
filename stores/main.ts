import type {CsvData, MapConfig, MapData, MapSource, RegionData, Timeline, SignalingSystem} from '~/types'
import {maps} from '~/data/maps'
import type { Region} from '~/classes'
import {Map} from '~/classes'
import signalingSystems from '~/data/signaling-systems'

const getDataObject = () => {
    return {
        map: null,
        data: null,
        timeline: {
            start: null,
            length: 0,
            offset: 0
        }
    }
}

interface MainState {
    mapName: string
    regionName: string
    signalingSystem: SignalingSystem
    hoveredRegion: Region | null,
    data: {
        [key: string]: {
            map: Map | null
            data: MapData | null
            timeline: Timeline
        }
    },
}

interface MainStateWithGetters extends MainState {
    mapConfig: MapConfig | null
    map: Map | null
    mapData: MapData | null
    mapRegion: Region | null
    regionData: RegionData | null
    timeline: Timeline | null
    loaded: boolean
}

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            mapName: '',
            regionName: '',
            signalingSystem: signalingSystems.find(s => s.id === 1),
            hoveredRegion: null,
            data: {},
        } as MainStateWithGetters
    },
    getters: {
        mapConfig(state: MainState): MapConfig | null {
            if (state.mapName) {
                return (
                    maps.find(map => map.title.toLowerCase() === state.mapName)
                    || null
                )
            }
            return null
        },
        map(state: MainState): Map | null {
            if (state.mapName && state.data[state.mapName]) {
                return state.data[state.mapName].map
            }
            else {
                return null
            }
        },
        mapData(state: MainState): MapData | null {
            if (state.mapName && state.data[state.mapName]) {
                return state.data[state.mapName].data
            }
            else {
                return null
            }
        },
        mapRegion(state: MainState): Region | null {
            const stateG = state as MainStateWithGetters
            if (stateG.map && stateG.mapData && state.regionName !== '') {
                return stateG.map.regions.find(r => r.title.toLowerCase() === state.regionName) || null
            } else {
                return null
            }
        },
        regionData(state: MainState): RegionData | null {
            const stateG = state as MainStateWithGetters
            if (stateG.mapRegion && stateG.mapData) {
                const code = stateG.mapRegion.code
                return stateG.mapData.find(r => r.title === code) || null
            } else {
                return null
            }
        },
        timeline(state: MainState): Timeline | null {
            const entry = state.data[state.mapName]
            if (entry && entry.timeline ) {
                return entry.timeline
            } else {
                return null
            }
        },
        loaded(state: MainState): boolean {
            const entry = state.data[state.mapName]
            return !!(entry && entry.map)
        },
    },
    actions: {
        addMap(key: string, regions: Region[]) {
            if (!this.data[key]) {
                this.data[key] = getDataObject()
            }
            this.data[key].map = new Map(regions)
        },
        addData(key: string, csvData: CsvData, source: MapSource) {
            if (!this.data[key]) {
                this.data[key] = getDataObject()
            }
            this.data[key].data = csvDataToMapData(csvData, source)
        },
        setTimeline(key: string,csvData: CsvData, source: MapSource) {
            if (!this.data[key]) {
                this.data[key] = getDataObject()
            }
            this.data[key].timeline = getTimelineConfigFromCsvData(csvData, source)
        },
        setOffset(offset: number) {
            if (this.timeline) {
                this.timeline.offset = offset
            }
        }
    },
})
