export type ResponseScannerDataType = {
    id: number;
    userId: number;
    scannerType: string;
    company: string;
    model: string;
    series: string;
    engineVolume: string;
    engineType: string;
    sity: string;
    yearFrom: number;
    yearTo: number;
    mileageFrom: number;
    mileageTo: number;
    priceFrom: number;
    priceTo: number;
    gearBox: string;
    state: string;
    ram: number;
    volumeOfMemory: number;
    heightWidthDepth: string;
    height: number;
    width: number;
    diameter: number;
    seasonality: null | string;
    rimWidth: number;
    numberOfHoles: number;
    diameterOfTheHoleArrangement: number;
    overhangRange: number;
    page: number;
    dateCreatedUtc: string;
}

export type ApdateScannerDataType = {
    company?: string;
    scannerType?: string;
    model?: string;
    series?: string;
    yearFrom?: number;
    yearTo?: number;
    engineVolume?: string;
    engineType?: string;
    mileageFrom?: number;
    mileageTo?: number;
    priceFrom?: number;
    priceTo: number;
    city?: string;
    gearBox?: string;
    state?: string;
    ram?: number;
    volumeOfMemory?: number;
    heightWidthDepth?: string;
}
