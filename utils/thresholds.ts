// import store from "@/store/store";
import interpolate from 'color-interpolate'
// import translateTool from "@/tools/translate";
import type { SignalingSystem, SignalingSystemThreshold } from '~/types'

const getThreshold = function (signalingSystem: SignalingSystem, cases: number): SignalingSystemThreshold | null {
    for (const threshold of signalingSystem.thresholds) {
        if (cases < threshold.n || (cases === 0 && threshold.n === 0)) {
            return threshold
        }
    }
    return null
}

const getNumber = function (signalingSystem: SignalingSystem, threshold: SignalingSystemThreshold) {
    let text
    const index = signalingSystem.thresholds.indexOf(threshold)
    if (index === 0) {
        if (threshold.n === 0) {
            text = '0'
        } else {
            text = '0 - ' + threshold.n
        }
    } else if (threshold.n !== Infinity) {
        const prev = signalingSystem.thresholds[index - 1]
        text = prev.n + ' - ' + threshold.n
    } else {
        text =
            signalingSystem.thresholds[signalingSystem.thresholds.length - 2]
                .n +
            ' ' +
        translateTool.translate('or-mor', 'nl')
    }
    if (index === 0) {
        text +=
            ' ' +
            
            //translateTool.translate(source.key, false) +
            ' ' +
            translateTool.translate('per', 'nl') +
            ' '
        text += getNiceNumberForPopulation(signalingSystem.population) + ' '
        text +=
            translateTool.translate('inhabitants', 'nl') +
            ' ' +
            translateTool.translate('per', 'nl') +
            ' '
        text += getNiceNumberForDays(signalingSystem.days)
    }
    return text
}

const getNiceNumberForDays = (days: number) => {
    if (days === 14) {
        return '14 days'
    } else if (days === 7) {
        return 'week'
    } else if (days === 1) {
        return 'dag'
    }
}

const getNiceNumberForPopulation = (popuplation: number) => {
    if (popuplation === 100000) {
        return '100.000'
    } else {
        return popuplation
    }
}

const getThresholds = function (source) {
    const signalingSystem = store.getters['signalingSystems/getItemById'](
        source.signalingSystem_id
    )
    return signalingSystem.thresholds
}

const _prevThreshold = function (signalingSystem: SignalingSystem, threshold: SignalingSystemThreshold) {
    const index = signalingSystem.thresholds.indexOf(threshold)
    if (index > 0) {
        return signalingSystem.thresholds[index - 1]
    } else {
        return null
    }
}

const _nextThreshold = function (signalingSystem: SignalingSystem, threshold: SignalingSystemThreshold) {
    const index = signalingSystem.thresholds.indexOf(threshold)
    if (index < signalingSystem.thresholds.length - 1) {
        return signalingSystem.thresholds[index + 1]
    } else {
        return null
    }
}

const thresholdToColor = function (signalingSystem: SignalingSystem, threshold: SignalingSystemThreshold, cases: number) {
    const gradient = true
    const colorType = 'regular'
    if (!threshold) {
        return '#888'
    } else {
        if (!gradient) {
            return threshold.color[colorType]
        } else {
            const prev = _prevThreshold(signalingSystem, threshold)
            const next = _nextThreshold(signalingSystem, threshold)
            if (!prev || !next) {
                return threshold.color[colorType]
            } else {
                let maxOfNextColor = 0.65
                // the free signaling system has no 'jump'
                if (signalingSystem.id === 4) {
                    maxOfNextColor = 1
                }
                const ratio =
                    (maxOfNextColor * (cases - prev.n)) /
                    (threshold.n - prev.n)
                const colormap = interpolate([
                    threshold.color[colorType],
                    next.color[colorType],
                ])
                return colormap(ratio)
            }
        }
    }
}

export const thresholdTools = {
    getThreshold,
    getNumber,
    // getThresholds,
    thresholdToColor,
}
