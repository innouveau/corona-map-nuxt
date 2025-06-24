import { Point } from './Point'
import type { DrawKey, DrawSettings } from '~/types'

class Path {
    public storedPaths: { [key: DrawKey]: Path2D }
    private path: Point[]

    constructor(path: { x: number, y: number }[]) {
        this.path = path.map(point => new Point(point))
        this.storedPaths = {}
    }

    create(settings: DrawSettings) {
        const path = new Path2D()
        const translatedPath = this.getTranslatedPath(settings)
        path.moveTo(...translatedPath[0])
        const pathWithoutStart = translatedPath.slice(1)
        for (const point of pathWithoutStart) {
            path.lineTo(...point)
        }
        this.storedPaths[settings.key] = path
    }

    getTranslatedPath(settings: DrawSettings) {
        return this.path.map(point => point.getTranslated(settings))
    }

    export() {
        return this.path
    }

    get box() {
        let x1, x2, y1, y2
        x1 = null
        x2 = null
        y1 = null
        y2 = null
        for (const point of this.path) {
            if (x1 === null || point.x < x1) {
                x1 = point.x
            }
            if (x2 === null || point.x > x2) {
                x2 = point.x
            }
            if (y1 === null || point.y < y1) {
                y1 = point.y
            }
            if (y2 === null || point.y > y2) {
                y2 = point.y
            }
        }
        return [
            new Point({ x: x1 as number, y: y1 as number }),
            new Point({ x: x2 as number, y: y1 as number }),
            new Point({ x: x2 as number, y: y2 as number }),
            new Point({ x: x1 as number, y: y2 as number }),
        ]
    }

    get centroid() {
        const box = this.box
        return {
            x: (box[0].x + box[1].x) / 2,
            y: (box[1].y + box[2].y) / 2,
        }
    }
}

export default Path
