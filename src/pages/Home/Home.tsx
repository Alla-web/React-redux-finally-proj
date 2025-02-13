import {
  ButtonContainer,
  HomeContainer,
  InputButtonContainer,
  InputContainer,
} from "./styles"
import Input from "components/Input/Input"
import Button from "components/Button/Button"
import ResultsBox from "components/ResultsBox/ResultsBox"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { useFormik } from "formik"
import { weatherFormFildsTypes } from "./types"
import {
  cityWeatherActions,
  cityWeatherSelectors,
} from "store/redux/CityWeatherSlice/CityWeatherSlice"
import * as Yup from "yup"

function Home() {
  //будем отправлять данные, поэтому вызываем useAppDispatch()
  const dispatch = useAppDispatch()

  const validationSchema = Yup.object().shape({
    city: Yup.string()
      .required("Field city is required")
      .min(2, "Min 2 symbols")
      .max(80, "Max 80 symbols")
      .typeError("City must be string"),
  })

  const formik = useFormik({
    initialValues: {
      city: "",
    } as weatherFormFildsTypes,
    validationSchema,
    validateOnChange: false,
    onSubmit: values => {   
      dispatch(cityWeatherActions.getCityWeather(values.city))
    },
  })

  // Забираем значение каунтера из store
  const {cityWeatherData, error, status} = useAppSelector(cityWeatherSelectors.cityWeatherData);
  console.log(cityWeatherData); 

  const lastCityWeatherData = cityWeatherData[cityWeatherData.length - 1];
  console.log(lastCityWeatherData);

  const city = lastCityWeatherData.name
 
  


  return (
    <HomeContainer>
      <InputButtonContainer onSubmit={formik.handleSubmit}>
        <InputContainer>
          <Input
            name="city"
            placeholder="Enter your city name"
            value={formik.values.city}
            onChange={formik.handleChange}
            errorMessage={formik.errors.city}
          />
        </InputContainer>
        <ButtonContainer>
          <Button name="Serch" type="submit" />
        </ButtonContainer>
      </InputButtonContainer>
      <ResultsBox 
      // city={cityWeatcherData.cityWeatherData.c} 
      // temperature={} 
      // imgSrc={} 
      // errorMessage={} 
      />
    </HomeContainer>
  )
}

export default Home
