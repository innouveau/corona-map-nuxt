import { Region } from '@/classes'

export const getRegionForPoint = (canvas: HTMLCanvasElement, map: Map, x: number, y: number, mapRenderKey) => {
    const ctx = canvas.getContext('2d')
    if (ctx) {
        const reversed = map.regions.slice().reverse()
        for (const region of reversed) {
            for (const path of region.paths) {
                if (
                    ctx.isPointInPath(
                        path.storedPaths[mapRenderKey],
                        x,
                        y
                    )
                ) {
                    return region
                }
            }
        }
        return null
    } else {
        return null
    }
}