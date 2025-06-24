import { Region } from './Region'

export class Map {
    constructor(regions = []) {
        this.regions = regions.map(r => new Region(r))
    }
}
