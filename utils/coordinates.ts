import type { Point } from '~/classes/'
import type { DrawSettings, TranslatedPoint } from '~/types'

const project = function (point: Point, settings: DrawSettings): TranslatedPoint {
    switch (settings.map.projection) {
    case 'robinson':
        return projectRobinson(point, settings)
    default:
        return projectRegular(point, settings)
    }
}

const projectRobinson = (point: Point, settings: DrawSettings): TranslatedPoint => {
    // let p, shiftX, shiftY, x, y
    // const canvasSettings = {
    //     canvasWidth: 400,
    //     canvasHeight: 400,
    // }
    // shiftX = canvasSettings.canvasWidth * (mapSettings.shiftX / 100)
    // shiftY = canvasSettings.canvasHeight * (mapSettings.shiftY / 100)
    // p = robinson.projectAbsolute(
    //     point.y,
    //     point.x,
    //     canvasSettings.canvasWidth,
    //     1,
    //     shiftX,
    //     shiftY,
    // )
    // x =
    //     mapSettings.zoom * p.x -
    //     0.5 * canvasSettings.canvasWidth * (mapSettings.zoom - 1)
    // y =
    //     mapSettings.zoom * p.y -
    //     0.5 * canvasSettings.canvasHeight * (mapSettings.zoom - 1)
    // return [x, y]
    return [0, 0]
}

const projectRegular = (point: Point, settings: DrawSettings): TranslatedPoint => {
    return [getLeft(point.x, settings), getTop(point.y, settings)]
}

const getLeft = function (longitude: number, settings: DrawSettings) {
    const multiplier
        = settings.map.stretch * settings.map.scale * settings.navigation.zoom
    const center = 0.5 * settings.container.width
    const relativePoint = longitude - settings.map.longitude
    const translatedPoint = relativePoint * multiplier
    const shiftByNavigation = settings.navigation.position.x
    return center + translatedPoint + shiftByNavigation
}

const getTop = function (latitude: number, settings: DrawSettings) {
    const multiplier = settings.map.scale * settings.navigation.zoom
    const center = 0.5 * settings.container.height
    const relativePoint = latitude - settings.map.latitude
    const translatedPoint = relativePoint * multiplier
    const shiftByNavigation = settings.navigation.position.y
    return center - translatedPoint + shiftByNavigation
}

export const coordinates = {
    project,
}
