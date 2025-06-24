export interface SignalingSystemThreshold {
    n: number
    color: {
        regular: string
        colorblind1?: string
        colorblind2?: string
        variant3?: string
    }
    label?: string;
}

export interface SignalingSystem {
    id: number
    source: string
    title: string
    days: number
    population: number
    thresholds: SignalingSystemThreshold[]
}