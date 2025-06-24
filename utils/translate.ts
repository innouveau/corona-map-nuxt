import dictionary from '~/data/dictionary'
import type {IsoCode} from '~/types'

const translate = function (word: string, isoCode: IsoCode, capitalize: boolean = false) {
    if (dictionary[word] && dictionary[word][isoCode]) {
        const translation = dictionary[word][isoCode]
        return capitalize ? translation : translation.toLowerCase()
    } else {
        return 'Could not translate ' + word
    }
}

export const translateTool = {
    translate,
}