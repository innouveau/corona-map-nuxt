import { getValueForRegion } from './draw-helper'
import type { Map, Region } from '~/classes/'
import type { DrawSettings, MapType, Timeline, MapData, SignalingSystem } from '~/types'

export const draw = (
    ctx: CanvasRenderingContext2D,
    map: Map,
    mapData: MapData,
    signalingSystem: SignalingSystem,
    timeline: Timeline,
    settings: DrawSettings,
    mapType: MapType,
) => {
    ctx.lineWidth = 0.5
    ctx.strokeStyle = settings.design.borderStyle
        ? settings.design.borderStyle
        : 'rgba(0,0,0,0.3)'
    for (const region of map.regions) {
        const regionData = mapData.find(r => r.title === region.code)
        if (regionData) {
            const result = getValueForRegion(region, regionData, signalingSystem, timeline, mapType)
            // if (mapType === "cumulative") {
            //     normalise(values);
            // }
            drawRegion(ctx, region, settings, result.color)
        } else {
            console.log('region not found')
        }

    }
}

const drawRegion = function (
    ctx: CanvasRenderingContext2D,
    region: Region,
    settings: DrawSettings,
    color: string,
) {
    ctx.fillStyle = color
    ctx.globalAlpha = 1
    // if (!region.baseRegion) {
    //     if (!region.paths) {
    //         const data = getPathsForRegion(region);
    //         region.paths = data.map((path) => new Path(path));
    //     }
    // }
    for (const path of region.paths) {
        if (!path.storedPaths[settings.key]) {
            path.create(settings)
        }
        if (settings.design.fill) {
            ctx.fill(path.storedPaths[settings.key])
        }
        if (!settings.design.hideStroke) {
            ctx.stroke(path.storedPaths[settings.key])
        }
    }
}
