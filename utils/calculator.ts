// import { getBaseRegions } from "./relations";
import type { Region } from '~/classes'
import type { RegionData } from '~/types'

// export const getDayForSource = (region, offset, source) => {
//     const index = store.state.settings.historyLength - 1 - offset;
//     // trigger the function to calculate the value in case it is a sum of childrens values
//     getAbsoluteValueForDay(region, offset, source);
//     return region.report.history[index];
// };
//
// const readCache = (region, start, end, source) => {
//     const key = String(start + "-" + end);
//     if (
//         region.report &&
//         region.report.cache &&
//         region.report.cache[source] &&
//         region.report.cache[source].hasOwnProperty(key)
//     ) {
//         return region.report.cache[source][key];
//     } else {
//         return false;
//     }
// };
//
// const writeCache = (region, start, end, source, value) => {
//     if (!region.report.hasOwnProperty("cache")) {
//         region.report.cache = {};
//     }
//     if (!region.report.cache.hasOwnProperty(source)) {
//         region.report.cache[source] = {};
//     }
//     const key = String(start + "-" + end);
//     region.report.cache[source][key] = value;
// };
//
const getAbsoluteCumulativeForPeriod = (region: Region, regionData: RegionData, start: number, end: number) => {
    let v = 0
    for (let i = start; i < end; i++) {
        v += regionData.numbers[i] as number
    }
    return v
}

export const getRelativeCumulativeForPeriod = (region: Region, regionData: RegionData, start: number, end: number) => {
    const totalPopulation = region.totalPopulation
    if (totalPopulation > 0) {
        const value = getAbsoluteCumulativeForPeriod(
            region,
            regionData,
            start,
            end,
        )
        return (value * 100000) / totalPopulation
    }
    else {
        return 0
    }
}
//
// export const getRelativeValueForDay = (region, offset, source) => {
//     const totalPopulation = getTotalPopulation(region);
//     const value = getAbsoluteValueForDay(region, offset, source);
//     if (value === null) {
//         return null;
//     } else {
//         if (totalPopulation > 0) {
//             return (value * 100000) / totalPopulation;
//         } else {
//             return 0;
//         }
//     }
// };
//
export const getAbsoluteValueForDay = (
    region: Region,
    offset: number,
    source: string,
    updateHistory = true,
) => {
    let value
    const index = store.state.settings.historyLength - 1 - offset
    if (
        region.report
        && region.report.history[index]
        && region.report.history[index].source.hasOwnProperty(source)
    ) {
        const day = region.report.history[index]
        value = day.source[source]
        if (!isNaN(value)) {
            return value
        }
        else {
            return 0
        }
    }
    else {
        let dayValue = 0
        const children = getBaseRegions(
            region,
            store.state.ui.currentRegionType,
        )
        for (const child of children) {
            if (
                child.report
                && child.report.history[index]
                && child.report.history[index].source.hasOwnProperty(source)
            ) {
                value = child.report.history[index].source[source]
                if (!isNaN(value)) {
                    dayValue += value
                }
            }
        }
        if (updateHistory) {
            if (!region.report) {
                region.report = { history: [], cache: {} }
            }
            if (!region.report.history[index]) {
                region.report.history[index] = {
                    offset: 0,
                    source: {},
                }
            }
            region.report.history[index].offset = offset
            region.report.history[index].source[source] = dayValue
        }
        return dayValue
    }
}

// export const getChangeOfType = (region, offset, daysBack, source) => {
//     const periodNow = getAbsoluteCumulativeForPeriod(
//         region,
//         offset,
//         offset + daysBack,
//         source,
//         false
//     );
//     const periodBefore = getAbsoluteCumulativeForPeriod(
//         region,
//         offset + daysBack,
//         offset + 2 * daysBack,
//         source,
//         false
//     );
//     return periodNow / periodBefore;
// };
//
export const getReportingDelay = (region, offset) => {
    // if (
    //     window.config.enableLateReportingCorrection &&
    //     region.hasLateReporting &&
    //     offset < 7
    // ) {
    //     let value = 0;
    //     let i = 0;
    //     while (value === 0 && i < 7) {
    //         value = getAbsoluteValueForDay(region, offset + i, "positiveTests");
    //         i++;
    //     }
    //     return i - 1;
    // } else {
    //     return 0;
    // }
    return 0
}

// this can do the total report in one callstack
// other functions might trigger watchers on a region
// multiple times
export const getHistory = (region) => {
    // TODO
    return region.report.history

    // // meaning it is a city
    // // (instead of an aggregated region like a province)
    // if (region === region.regions[0]) {
    //     return region.report.history;
    // } else {
    //     const values = [];
    //     const l = store.state.settings.historyLength;
    //     for (let i = 0; i < l; i++) {
    //         const offset = l - 1 - i;
    //         const v = getAbsoluteValueForDay(region, offset, source, false);
    //         values.push(v);
    //     }
    //     for (let i = 0; i < l; i++) {
    //         if (!region.report.history[i]) {
    //             region.report.history[i] = {};
    //         }
    //         region.report.history[i].offset = l - 1 - i;
    //         region.report.history[i].source[source] = values[i];
    //     }
    //     return region.report.history;
    // }
}
