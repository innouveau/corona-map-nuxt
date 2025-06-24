import Path from './geo/Path.ts'

export { Path }

export class Region {
    constructor({
        id = null,
        code = '',
        nutsCode = '',
        title = '',
        population = 0,
        paths = [],
        report = {
            history: [],
        },
    }) {
        this.id = id
        this.code = code
        this.nutsCode = nutsCode
        this.title = title
        this.population = population
        this.paths = paths.map(path => new Path(path))
        this.report = report
        this.noData = false
        this.baseRegion = true
    }

    get titleForSorting() {
        return this.title
    // return stringTool.titleForSorting(this.title);
    }

    get hasLateReporting() {
        let map = store.state.maps.current
        if (map.settings.caseSettings) {
            for (let code of map.settings.caseSettings.lateReporting) {
                if (this.nutsCode.indexOf(code) > -1) {
                    return true
                }
            }
            return false
        }
        else {
            return false
        }
    }

    getCentroid(settings) {
        let path, centroid, projected
        path = this.paths[0]
        centroid = path.centroid
        projected = coordinates.project(centroid, settings)
        return {
            x: projected[0],
            y: projected[1],
        }
    }

    get totalPopulation() {
        if (this.baseRegion) {
            return this.population
        }
        else {
            return 0
            // let population = 0;
            // const children = getBaseRegions(
            //     region,
            //     store.state.ui.currentRegionType
            // );
            // for (const child of children) {
            //     population += child.population;
            // }
            // return population;
        }
    }
}
