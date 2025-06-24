import { format } from 'date-fns'
import { nl } from 'date-fns/locale' 

// const dayLength = 1000 * 3600 * 24
// const dateToOffsetDict = {}
// const offsetToDateDict = {}
//
// const getOffsetByDate = function (dateString) {
//     if (dateToOffsetDict[dateString]) {
//         return dateToOffsetDict[dateString]
//     } else {
//         const offset = getOffsetFromDateCalculated(dateString)
//         addDateOffset(dateString, offset)
//         return offset
//     }
// }
//
// const getDateByOffset = function (offset) {
//     if (offsetToDateDict[offset]) {
//         return offsetToDateDict[offset]
//     } else {
//         if (!offsetToDateDict[0]) {
//             // no data available probably
//             return 'no-date'
//         } else {
//             const dateString = getDateFromOffsetCalculated(offset)
//             addDateOffset(dateString, offset)
//             return dateString
//         }
//     }
// }
//
// const formatDate = function (date, dateFormat = 'yyyy-MM-dd') {
//     if (date) {
//         return format(date, dateFormat, { locale: nl })
//     } else {
//         return ''
//     }
// }

const getTimestamp = function () {
    return '?time=' + new Date().getTime()
}

// const addDateOffset = function (dateString, offset) {
//     dateToOffsetDict[dateString] = offset
//     offsetToDateDict[offset] = dateString
// }
//
// const getOffsetFromDateCalculated = function (dateString) {
//     let msRequested, msToday, today
//     msRequested = new Date(dateString).getTime()
//     today = getDateByOffset(0)
//     msToday = new Date(today).getTime()
//     return (msToday - msRequested) / dayLength
// }
//
// const getDateFromOffsetCalculated = function (offset) {
//     let today, msToday, msRequested, date
//     today = getDateByOffset(0)
//     msToday = new Date(today).getTime()
//     msRequested = msToday + dayLength * offset
//     date = new Date(msRequested)
//     return formatDate(date)
// }

export const dateTool = {
    // getOffsetByDate,
    // getDateByOffset,
    // formatDate,
    getTimestamp,
    // addDateOffset,
}
