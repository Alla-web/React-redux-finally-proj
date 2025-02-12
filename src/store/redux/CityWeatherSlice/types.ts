export interface CityWeatherDataType {
    id: string,
    city: string,
    temperature: string,
    image: string
}

export interface CityWeatherSliceState {
    cityWeatherData: CityWeatherDataType[],
    error: any,
    status: 'default' | 'loading' | 'success' | 'error'
}
