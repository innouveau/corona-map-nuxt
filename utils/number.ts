const format = (value: number, addPlus = true) => {
    if (value > 0) {
        const v = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        return addPlus ? '+' + v : v
    }
    else {
        return value
    }
}

const formatChange = (value: number) => {
    const pct = Math.round(value * 100) - 100
    if (pct > 0) {
        return '+' + pct + '%'
    }
    else if (pct === 0) {
        return '0%'
    }
    else {
        return pct + '%'
    }
}

const convertToNumber = (value: number) => {
    const number = Number(value)
    if (!isNaN(number)) {
        return number
    }
    else {
        return 0
    }
}

export const numberTools = {
    format,
    formatChange,
    convertToNumber,
}
