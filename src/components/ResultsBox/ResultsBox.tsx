import {
  City,
  ErrorContainer,
  ErrorMessage,
  ErrorType,
  Img,
  ResultsBoxContainer,
  Temperature,
  TemperatureCityContainer,
} from "./styles"
import Logo1 from "../../assets/foto/logo1.png"
import { ResultsBoxProps } from "./types"

function ResultsBox({
  city,
  temperature,
  imgSrc,
  errorMessage,
}: ResultsBoxProps) {
  return (
    <>
      {errorMessage ? (
        <ErrorContainer>
          <ErrorType>Error</ErrorType>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorContainer>
      ) : (
        <ResultsBoxContainer>
          <TemperatureCityContainer>
            <Temperature>{temperature}</Temperature>
            <City>{city}</City>
          </TemperatureCityContainer>
          <Img src={imgSrc} alt="Weather image" />
        </ResultsBoxContainer>
      )}
    </>
  )
}

export default ResultsBox
