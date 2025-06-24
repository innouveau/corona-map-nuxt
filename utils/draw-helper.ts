import { getRelativeCumulativeForPeriod } from './calculator'
import type { Region } from '~/classes'
import type { MapType, Timeline, RegionData, SignalingSystem } from '~/types'

export const getValueForRegion = function (region: Region, regionData: RegionData,  signalingSystem: SignalingSystem, timeline: Timeline, mapType: MapType) {
    // if (!view.currentSource || region.noData === true) {
    //     return {
    //         value: null,
    //         color: "#888",
    //     };
    // } else {
    switch (mapType) {
    // case "change":
    //     const change = getChangeOfType(
    //         region,
    //         view.offset,
    //         7,
    //         view.currentSource.key
    //     );
    //     return {
    //         value: null,
    //         color: changeTools.getColorForChange(change),
    //     };
    // case "cumulative":
    //     const start = view.offset;
    //     const end = view.offsetStart;
    //     const cumulative = getRelativeCumulativeForPeriod(
    //         region,
    //         start,
    //         end,
    //         view.currentSource.key
    //     );
    //     return {
    //         value: cumulative,
    //         color: null,
    //     };
    default:
        return {
            value: null,
            color: getColorForRegion(region, regionData, signalingSystem, timeline),
        }
    }
    // }
}

const getColorForRegion = (region: Region, regionData: RegionData, signalingSystem: SignalingSystem, timeline: Timeline) => {
    const days = signalingSystem.days
    const value = getRelativeCumulativeForPeriod(
        region,
        regionData,
        timeline.offset,
        timeline.offset + days,
    )
    const threshold = thresholdTools.getThreshold(signalingSystem, value)
    if (threshold) {
        return thresholdTools.thresholdToColor(signalingSystem, threshold, value)
    } else {
        return '#888'
    }
}

//
// const addBackground = function (
//     ctx: CanvasRenderingContext2D,
//     width: number,
//     height: number,
// ) {
//     ctx.rect(0, 0, width, height)
//     ctx.fillStyle = '#f5eedc'
//     ctx.fill()
// }
//
// const normalise = (regions: Region[]) => {
//     let total = 0
//     for (const region of regions) {
//         if (isNaN(region.result.value)) {
//             console.log(region)
//         }
//     }
//     const max = Math.max(...regions.map((i) => i.result.value), 0)
//     const min = Math.min(...regions.map((i) => i.result.value), max)
//     for (const region of regions) {
//         total += region.result.value
//     }
//     const average = total / regions.length
//     for (const region of regions) {
//         let ratio, range
//         const value = region.result.value
//         const offset = Math.abs(value - average)
//         if (value > average) {
//             range = max - average
//             ratio = offset / range
//             region.result.color = getShadeOfColor(
//                 CUMULATIVE_COLOR_SCALE[1],
//                 CUMULATIVE_COLOR_SCALE[2],
//                 ratio,
//             )
//         } else {
//             range = average - min
//             ratio = offset / range
//             region.result.color = getShadeOfColor(
//                 CUMULATIVE_COLOR_SCALE[1],
//                 CUMULATIVE_COLOR_SCALE[0],
//                 ratio,
//             )
//         }
//     }
// }
