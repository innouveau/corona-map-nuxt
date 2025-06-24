import type { MapConfig } from '~/types'

const dataUrl = 'https://raw.githubusercontent.com/mzelst/covid-19/master/'

const mzelstAdapter = {
    titleKey: 'Municipality_code',
    valuePrefix: '',
    isValueColumn: function (column: string) {
        return column.indexOf('20') > -1
    },
    getDateFromColumn: function (column: string) {
        return column
    },
}

export const maps: MapConfig[] = [
    {
        id: 1,
        title: 'Nederland',
        story_id: 1,
        settings: {
            regionTypes: [
                'municipality',
                'ggd',
                'safety-region',
                'province',
                'country',
            ],
            pathOrigins: [
                {
                    type: 'country',
                    paths: 'city',
                },
            ],
            generalInfoHasPopulation: false,
            map: {
                latitude: 52.15,
                longitude: 5.34,
                stretch: 0.62,
                zoom: 0.345,
                ratio: 0.91,
                projection: 'none',
            },
            positiveTestGraph: {
                zoomFactor: 0.075,
            },
            interval: 1,
        },
        data: {
            geo: {
                status: true,
                source: '/data/maps/nederland/cities.json?version=2022weesp',
            },
            sources: {
                positiveTests: {
                    loadInitially: true,
                    url: dataUrl + 'data/municipality-totals.csv',
                    interval: 1,
                    cumulative: true,
                    adapter: mzelstAdapter,
                },
                hospitalisations: {
                    loadInitially: false,
                    url: dataUrl + 'data/municipality-hospitalisations.csv',
                    interval: 1,
                    cumulative: true,
                    adapter: mzelstAdapter,
                },
                deceased: {
                    loadInitially: false,
                    url: dataUrl + 'data/municipality-deaths.csv',
                    interval: 1,
                    cumulative: true,
                    adapter: mzelstAdapter,
                },
            },
        },
    },
]
