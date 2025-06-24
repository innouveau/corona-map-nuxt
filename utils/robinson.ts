// Robinson projection calculation

// Written by Niklas Bichinger (bichinger.de). This code is Public Domain - use as you like.

// source of robinson numbers: https://simplemaps.com/static/img/flash/robinson_projection_table.jpg
const robinsonAA = [
    0.8487, 0.84751182, 0.84479598, 0.840213, 0.83359314, 0.8257851, 0.814752,
    0.80006949, 0.78216192, 0.76060494, 0.73658673, 0.7086645, 0.67777182,
    0.64475739, 0.60987582, 0.57134484, 0.52729731, 0.48562614, 0.45167814,
]
const robinsonBB = [
    0.0, 0.0838426, 0.1676852, 0.2515278, 0.3353704, 0.419213, 0.5030556,
    0.5868982, 0.67047034, 0.75336633, 0.83518048, 0.91537187, 0.99339958,
    1.06872269, 1.14066505, 1.20841528, 1.27035062, 1.31998003, 1.3523,
]

const project = function (
    latitude,
    longitude,
    mapWidth,
    heightFactor,
    mapOffsetX,
    mapOffsetY,
) {
    if (typeof heightFactor === 'undefined') {
        heightFactor = 1
    }
    if (typeof mapOffsetX === 'undefined') {
        mapOffsetX = 0
    }
    if (typeof mapOffsetY === 'undefined') {
        mapOffsetY = 0
    }

    // Robinson's latitude interpolation points are in 5-degree-steps
    const latitudeAbs = Math.abs(latitude)
    const latitudeStepFloor = Math.floor(latitudeAbs / 5)
    const latitudeStepCeil = Math.ceil(latitudeAbs / 5)
    // calc interpolation factor (>=0 to <1) between two steps
    const latitudeInterpolation = (latitudeAbs - latitudeStepFloor * 5) / 5

    // interpolate robinson table values
    const AA
        = robinsonAA[latitudeStepFloor]
            + (robinsonAA[latitudeStepCeil] - robinsonAA[latitudeStepFloor])
            * latitudeInterpolation
    const BB
        = robinsonBB[latitudeStepFloor]
            + (robinsonBB[latitudeStepCeil] - robinsonBB[latitudeStepFloor])
            * latitudeInterpolation

    const robinsonWidth = 2 * Math.PI * robinsonAA[0]
    const widthFactor = mapWidth / robinsonWidth
    const latitudeSign = Math.sign(latitude) || 1
    const x = (widthFactor * AA * longitude * Math.PI) / 180 + mapOffsetX
    const y = widthFactor * BB * latitudeSign * heightFactor + mapOffsetY

    return { x: x, y: y }
}

const projectAbsolute = function (
    latitude,
    longitude,
    mapWidth,
    heightFactor,
    mapOffsetX,
    mapOffsetY,
) {
    if (typeof heightFactor === 'undefined') {
        heightFactor = 1
    }

    const relative = project(
        latitude,
        longitude,
        mapWidth,
        heightFactor,
        mapOffsetX,
        mapOffsetY,
    )
    const widthHeightRatio = (Math.PI * robinsonAA[0]) / robinsonBB[18]
    const x = mapWidth / 2 + relative.x
    const y = ((mapWidth / widthHeightRatio) * heightFactor) / 2 - relative.y

    return { x: x, y: y }
}

export const robinson = {
    project,
    projectAbsolute,
}
