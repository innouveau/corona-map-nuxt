export type IsoCode = 'nl' | 'en';

export interface Dictionary {
    [key: string]: {
        nl: string;
        en: string;
    };
}