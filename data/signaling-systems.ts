import type {SignalingSystem} from '~/types'

const signalingSystems: SignalingSystem[] = [
    {
        id: 1,
        source: 'positiveTests',
        title: 'Power of 2',
        days: 7,
        population: 100000,
        thresholds: [
            {
                n: 0,
                color: {
                    regular: '#8DC63F',
                    colorblind1: 'rgb(255, 255, 255)',
                    colorblind2: 'rgb(255, 255, 255)',
                    variant3: 'rgb(255, 255, 255)',
                },
            },
            {
                n: 16,
                color: {
                    regular: '#CBDA2D',
                    colorblind1: 'rgb(216, 216, 216)',
                    colorblind2: 'rgb(216, 216, 216)',
                    variant3: '#FDFEA7',
                },
            },
            {
                n: 32,
                color: {
                    regular: '#FFF200',
                    colorblind1: 'rgb(180, 180, 180)',
                    colorblind2: 'rgb(180, 180, 180)',
                    variant3: '#FBA121',
                },
            },
            {
                n: 64,
                color: {
                    regular: '#FDB913',
                    colorblind1: 'rgb(144,144,144)',
                    colorblind2: 'rgb(144,144,144)',
                    variant3: '#DD513B',
                },
            },
            {
                n: 128,
                color: {
                    regular: '#F48221',
                    colorblind1: 'rgb(108,108,108)',
                    colorblind2: 'rgb(108,108,108)',
                    variant3: '#BB3554',
                },
            },
            {
                n: 256,
                color: {
                    regular: '#ED1C24',
                    colorblind1: 'rgb(72,72,72)',
                    colorblind2: 'rgb(72,72,72)',
                    variant3: '#80206B',
                },
            },
            {
                n: 512,
                color: {
                    regular: '#D91872',
                    colorblind1: 'rgb(36,36,36)',
                    colorblind2: 'rgb(36,36,36)',
                    variant3: '#2B0E58',
                },
            },
            {
                n: Infinity,
                color: {
                    regular: '#000',
                    colorblind1: 'rgb(0,0,0)',
                    colorblind2: 'rgb(0,0,0)',
                    variant3: 'rgb(0,0,0)',
                },
            },
        ],
    },
    {
        id: 7,
        source: 'positiveTests',
        title: 'ECDC 1-4%',
        days: 14,
        population: 100000,
        thresholds: [
            {
                n: 0,
                color: {
                    regular: '#8DC63F',
                },
            },
            {
                n: 50,
                color: {
                    regular: '#8DC63F',
                },
            },
            {
                n: 75,
                color: {
                    regular: '#FDB913',
                },
            },
            {
                n: 200,
                color: {
                    regular: '#FDB913',
                },
            },
            {
                n: 500,
                color: {
                    regular: '#eb4034',
                },
            },
            {
                n: Infinity,
                color: {
                    regular: '#751f19',
                },
            },
        ],
    },
    {
        id: 8,
        source: 'positiveTests',
        title: 'ECDC >4%',
        days: 14,
        population: 100000,
        thresholds: [
            {
                n: 0,
                color: {
                    regular: '#8DC63F',
                },
            },
            {
                n: 50,
                color: {
                    regular: '#FDB913',
                },
            },
            {
                n: 75,
                color: {
                    regular: '#FDB913',
                },
            },
            {
                n: 200,
                color: {
                    regular: '#eb4034',
                },
            },
            {
                n: 500,
                color: {
                    regular: '#eb4034',
                },
            },
            {
                n: Infinity,
                color: {
                    regular: '#751f19',
                },
            },
        ],
    },
    {
        id: 2,
        source: 'positiveTests',
        title: 'Power of 2 per day',
        days: 1,
        population: 100000,
        thresholds: [
            {
                n: 0,
                color: {
                    regular: '#8DC63F',
                    colorblind1: 'rgb(255, 255, 255)',
                    colorblind2: 'rgb(255, 255, 255)',
                    variant3: 'rgb(255, 255, 255)',
                },
            },
            {
                n: 2.28,
                color: {
                    regular: '#CBDA2D',
                    colorblind1: 'rgb(216, 216, 216)',
                    colorblind2: 'rgb(216, 216, 216)',
                    variant3: 'rgb(216, 216, 216)',
                },
            },
            {
                n: 4.57,
                color: {
                    regular: '#FFF200',
                    colorblind1: 'rgb(180, 180, 180)',
                    colorblind2: 'rgb(180, 180, 180)',
                    variant3: 'rgb(180, 180, 180)',
                },
            },
            {
                n: 9.14,
                color: {
                    regular: '#FDB913',
                    colorblind1: 'rgb(144,144,144)',
                    colorblind2: 'rgb(144,144,144)',
                    variant3: 'rgb(144,144,144)',
                },
            },
            {
                n: 18.28,
                color: {
                    regular: '#F48221',
                    colorblind1: 'rgb(108,108,108)',
                    colorblind2: 'rgb(108,108,108)',
                    variant3: 'rgb(108,108,108)',
                },
            },
            {
                n: 36.57,
                color: {
                    regular: '#ED1C24',
                    colorblind1: 'rgb(72,72,72)',
                    colorblind2: 'rgb(72,72,72)',
                    variant3: 'rgb(72,72,72)',
                },
            },
            {
                n: 73.14,
                color: {
                    regular: '#D91872',
                    colorblind1: 'rgb(36,36,36)',
                    colorblind2: 'rgb(36,36,36)',
                    variant3: 'rgb(36,36,36)',
                },
            },
            {
                n: Infinity,
                color: {
                    regular: '#000',
                    colorblind1: 'rgb(0,0,0)',
                    colorblind2: 'rgb(0,0,0)',
                    variant3: 'rgb(0,0,0)',
                },
            },
        ],
    },
    {
        id: 3,
        source: 'positiveTests',
        title: 'Routekaart (NL)',
        days: 7,
        population: 100000,
        thresholds: [
            {
                n: 0,
                label: 'Geen',
                color: {
                    regular: 'rgb(144,250,5)',
                    colorblind1: '#333',
                    colorblind2: '#ffffb2',
                    variant3: '#f2f0f7',
                },
            },
            {
                n: 50,
                label: 'Waakzaam',
                color: {
                    regular: '#F093BC',
                    colorblind1: '#66c2a5',
                    colorblind2: '#fecc5c',
                    variant3: '#cbc9e2',
                },
            },
            {
                n: 150,
                label: 'Zorgelijk',
                color: {
                    regular: '#D95F94',
                    colorblind1: '#8da0cb',
                    colorblind2: '#fd8d3c',
                    variant3: '#9e9ac8',
                },
            },
            {
                n: 250,
                label: 'Ernstig',
                color: {
                    regular: '#BA2667',
                    colorblind1: '#fc8d62',
                    colorblind2: '#e31a1c',
                    variant3: '#6a51a3',
                },
            },
            {
                n: Infinity,
                label: 'Zeer ernstig',
                color: {
                    regular: '#670630',
                    colorblind1: 'rgb(40,40,40)',
                    colorblind2: 'rgb(40,40,40)',
                    variant3: 'rgb(40,40,40)',
                },
            },
        ],
    },
    {
        // id 4 is used in map-tools-popup.vue and thresholds.js
        id: 4,
        source: 'positiveTests',
        title: 'Non-qualitative',
        days: 7,
        population: 100000,
        thresholds: [
            {
                n: 0,
                color: {
                    regular: 'rgb(255,255,255)',
                    colorblind1: 'rgb(255,255,255)',
                    colorblind2: 'rgb(255,255,255)',
                    variant3: 'rgb(255,255,255)',
                },
            },
            {
                n: 1500,
                color: {
                    regular: 'rgb(250,250,250)',
                    colorblind1: 'rgb(250,250,250)',
                    colorblind2: 'rgb(250,250,250)',
                    variant3: 'rgb(250,250,250)',
                },
            },
            {
                n: Infinity,
                color: {
                    regular: 'rgb(0, 0, 0)',
                    colorblind1: 'rgb(0, 0, 0)',
                    colorblind2: 'rgb(0, 0, 0)',
                    variant3: 'rgb(0, 0, 0)',
                },
            },
        ],
    },
    {
        id: 5,
        source: 'hospitalisations',
        title: 'Hospitalisations',
        days: 7,
        population: 100000,
        thresholds: [
            {
                n: 0,
                color: {
                    regular: 'rgb(255,255,255)',
                    colorblind1: 'rgb(255,255,255)',
                    colorblind2: 'rgb(255,255,255)',
                    variant3: 'rgb(255,255,255)',
                },
            },
            {
                n: 10,
                color: {
                    regular: 'rgb(255,200,200)',
                    colorblind1: 'rgb(255,255,255)',
                    colorblind2: 'rgb(255,255,255)',
                    variant3: 'rgb(255,255,255)',
                },
            },
            {
                n: 50,
                color: {
                    regular: 'rgb(255,0,0)',
                    colorblind1: 'rgb(255,0,0)',
                    colorblind2: 'rgb(255,0,0)',
                    variant3: 'rgb(255,0,0)',
                },
            },
            {
                n: Infinity,
                color: {
                    regular: 'rgb(0, 0, 0)',
                    colorblind1: 'rgb(0, 0, 0)',
                    colorblind2: 'rgb(0, 0, 0)',
                    variant3: 'rgb(0, 0, 0)',
                },
            },
        ],
    },
    {
        id: 6,
        source: 'deceased',
        title: 'Deceased',
        days: 7,
        population: 100000,
        thresholds: [
            {
                n: 0,
                color: {
                    regular: 'rgb(255,255,255)',
                    colorblind1: 'rgb(255,255,255)',
                    colorblind2: 'rgb(255,255,255)',
                    variant3: 'rgb(255,255,255)',
                },
            },
            {
                n: 30,
                color: {
                    regular: 'rgb(200,200,200)',
                    colorblind1: 'rgb(255,255,255)',
                    colorblind2: 'rgb(255,255,255)',
                    variant3: 'rgb(255,255,255)',
                },
            },
            {
                n: Infinity,
                color: {
                    regular: 'rgb(0, 0, 0)',
                    colorblind1: 'rgb(0, 0, 0)',
                    colorblind2: 'rgb(0, 0, 0)',
                    variant3: 'rgb(0, 0, 0)',
                },
            },
        ],
    },
    {
        id: 9,
        source: 'vaccination',
        title: 'Vaccinated',
        days: 7,
        population: 100,
        thresholds: [
            {
                n: 0,
                color: {
                    regular: '#b91a2c',
                },
            },
            {
                n: 60,
                color: {
                    regular: '#b91a2c',
                },
            },
            {
                n: 65,
                color: {
                    regular: '#d3604e',
                },
            },
            {
                n: 70,
                color: {
                    regular: '#f4a683',
                },
            },
            {
                n: 75,
                color: {
                    regular: '#ffd8c8',
                },
            },
            {
                n: 80,
                color: {
                    regular: '#d2e5ef',
                },
            },
            {
                n: 85,
                color: {
                    regular: '#95c3da',
                },
            },
            {
                n: 90,
                color: {
                    regular: '#4194be',
                },
            },
            {
                n: 100,
                color: {
                    regular: '#4194be',
                },
            },
            {
                n: Infinity,
                color: {
                    regular: 'rgb(0, 0, 0)',
                },
                label: 'No data',
            },
        ],
    },
]

export default signalingSystems
