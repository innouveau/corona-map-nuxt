export type CsvRow = never

export type CsvData = CsvRow[]

export interface RegionData {
    title: string
    population: number
    numbers: number[]
}

export type MapData = RegionData[]