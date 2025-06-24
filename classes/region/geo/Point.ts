import type { DrawSettings, TranslatedPoint } from '~/types'

export class Point {
    public x: number
    public y: number

    constructor({ x = 0, y = 0 }) {
        this.x = x
        this.y = y
    }

    getTranslated(settings: DrawSettings): TranslatedPoint {
        return coordinates.project(this, settings)
    }
}
