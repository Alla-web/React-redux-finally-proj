import ResultsBox from "components/ResultsBox/ResultsBox"
import { HistoryContainer } from "pages/History/styles"
import { useAppSelector } from "store/hooks"
import {
  cityWeatherActions,
  cityWeatherSelectors,
} from "store/redux/CityWeatherSlice/CityWeatherSlice"

function History() {
  //забираем данные
  const { cityWeatherData, error, status } = useAppSelector(
    cityWeatherSelectors.cityWeatherData,
  )

  return <HistoryContainer></HistoryContainer>
}

export default History
