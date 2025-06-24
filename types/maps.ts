export type MapType = 'change' | 'cumulative' | 'regular' // ??

export interface MapSource {
    loadInitially?: boolean
    url?: string
    interval?: number
    cumulative?: boolean
    adapter?: any
}

export type MapProjection = 'robinson' | 'none'

export interface MapConfig {
    id: number
    title: string
    story_id: number
    settings: {
        regionTypes: string[]
        pathOrigins: { type: string, paths: string }[]
        generalInfoHasPopulation: boolean
        map: {
            latitude: number
            longitude: number
            stretch: number
            zoom: number
            ratio: number
            projection: MapProjection
        }
        positiveTestGraph?: {
            zoomFactor?: number
        }
        interval?: number
    }
    data: {
        geo: {
            status: boolean
            source: string
        }
        sources: {
            [K in SourceKey]: MapSource
        }
    }
}

export type DrawKey = string

export type TranslatedPoint = [number, number]

export interface DrawSettings {
    key: DrawKey
    design: {
        fill: boolean
        border: boolean
        hideStroke?: boolean
        borderStyle?: string
    }
    map: {
        scale: number
        latitude: number
        longitude: number
        stretch: number
        zoom: number
        ratio: number
        projection: MapProjection
    }
    navigation: {
        zoom: number
        position: {
            x: number
            y: number
        }
    }
    container: {
        width: number
        height: number
    }
    // canvas: HTMLCanvasElement

    //
    // shiftPrint: {
    //     x: number
    //     y: number
    // }
    //
}

export type SourceKey = 'positiveTests' | 'hospitalisations' | 'deceased'
