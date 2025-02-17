interface Weather {
  description: string
  icon: string
  id: number
  main: string
}

export interface CityWeatherDataType {
  id?: string
  city?: string
  temperature?: string
  image?: string
  name?: string
  main?: {
    feels_like: number
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_max: number
    temp_min: number
  }
  weather?: Weather[]
}

export interface CityWeatherSliceState {
  cityWeatherData: CityWeatherDataType[]
  error: any
  status: "default" | "loading" | "success" | "error"
}
