import { createAppSlice } from "store/createAppSlice"
import { useAppSelector, useAppDispatch } from "store/hooks"
import { PayloadAction } from "@reduxjs/toolkit"
import { CityWeatherSliceState } from "./types"
import axios from "axios"

const initialCityWeatherState: CityWeatherSliceState = {
  cityWeatherData: [],
  error: undefined,
  status: "default",
}

export const CityWeatherSlice = createAppSlice({
  name: "CITY_WEATHER",
  initialState: initialCityWeatherState,
  reducers: create => ({
    getCityWeather: create.asyncThunk(
      async (arg: string, thunkApi) => {
        try {        
          const apiKey = "1fe33819afaa1c454df3c8c26b932af5"
          let cityWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${arg}&appid=${apiKey}`

          const result = await axios.get(cityWeatherUrl)
          // В случае успешного завершения запроса, возвращаются полученные данные для того, чтобы
          // получить их в обработчике fulfilled (т.к. только редьюсеры имеют право изменять state)          
          return result.data
        } catch (error) {
          // В случае ошибка её нужно отправлять в обработчик rejected с помощью метода rejectWithValue()
          return thunkApi.rejectWithValue(error)
        } 
      },
      {
        //Обрабатываем действия, которые должны происходить, когда произошла отправка запроса,
        // но результат мы ещё ждем
        pending: (state: CityWeatherSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        //Обработка успешного результата
        fulfilled: (state: CityWeatherSliceState, action: any) => {
          state.cityWeatherData = [...state.cityWeatherData, action.payload]
          state.status = 'success'
        },
        //Обработка ошибки
        rejected: (state: CityWeatherSliceState, action: any) => {
            state.error = action.payload.message
            state.status = 'error'
        },
      },
    ),
  }),
  selectors: {
    cityWeatherData: (state: CityWeatherSliceState) => state,
  },
})

export const cityWeatherActions = CityWeatherSlice.actions
export const cityWeatherSelectors = CityWeatherSlice.selectors
console.table(cityWeatherSelectors);

