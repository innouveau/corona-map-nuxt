import type {CsvData, MapData, MapSource, RegionData, Timeline} from '~/types'
import {CalendarDate, DateFormatter} from '@internationalized/date'

const getDatesFromRow = (keys: string, source: MapSource) => {
    const dates = []
    const adapter = source.adapter
    for (const key of keys) {
        if (adapter.isValueColumn(key)) {
            const dateString = adapter.getDateFromColumn(key)
            dates.push(dateString)
        }
    }
    return dates
}

export const csvDataToMapData = (csvData: CsvData, source: MapSource): MapData => {
    const mapData: MapData = []
    const adapter = source.adapter
    const dates = getDatesFromRow(csvData.columns, source)
    for (const row of csvData) {
        const populationKey = Object.prototype.hasOwnProperty.call(adapter, 'populationKey')
            ? adapter.populationKey
            : 'population'
        const title = row[adapter.titleKey]
        if (title) {
            const regionData: RegionData = {
                title,
                population: numberTools.convertToNumber(row[populationKey]),
                numbers: [],
            }
            let lastNumber = 0
            // dates.map(dateKey => Number(row[dateKey] || 0))
            for (const date of dates) {

                const value = row[date] || 0
                const number = numberTools.convertToNumber(value)
                let realNumber
                if (source.cumulative) {
                    realNumber = number - lastNumber
                    lastNumber = number
                } else {
                    realNumber = number
                }
                regionData.numbers.push(realNumber)
            }
            mapData.push(regionData)
        }
    }
    return mapData
}

export const getTimelineConfigFromCsvData = (csvData: CsvData, source: MapSource): Timeline => {
    const dates = getDatesFromRow(csvData.columns, source)
    return {
        start: new Date(dates[0]),
        length: dates.length,
        //offset: dates.length - 1
        offset: 30
    }
    
}

export const dateToCalendarDate = (date: Date, offset: number): CalendarDate => {
    const y = date.getFullYear()
    const m = date.getMonth() + 1
    const d = date.getDate()
    const start = new CalendarDate(y, m, d)
    if (offset) {
        return start.add({ days: offset })
    } else {
        return start
    }
}

export const getOffsetFromDates = (date1: CalendarDate, date2: CalendarDate): number => {
    return date1.compare(date2)
}

export const getFormattedDate = (cd: CalendarDate): string => {
    const df = new DateFormatter('nl-NL', {
        dateStyle: 'medium'
    })
    return df.format(cd.toDate())
}


export const getFormattedDateFromOffset = (date: Date, offset: number): string => {
    let cd
    const y = date.getFullYear()
    const m = date.getMonth() + 1
    const d = date.getDate()
    const start = new CalendarDate(y, m, d)
    if (offset) {
        cd = start.add({ days: offset })
    } else {
        cd = start
    }
    return getFormattedDate(cd)
}