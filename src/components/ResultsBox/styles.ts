import styled from "@emotion/styled";

export const ResultsBoxContainer = styled.div`
width: 710px;
height: 180px;
padding: 28px 40px;
display: flex;
justify-content: center;
align-items: start;
gap: 170px;
background: linear-gradient(135deg, rgba(11, 27, 52, 0.5), rgba(47, 72, 111, 0.5));
border-radius: 30px;
color: white;
`

export const TemperatureCityContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 6px;
`

export const Temperature = styled.p`
font-size: 57px;
`

export const City = styled.p`
font-size: 20px;
`
export const Img = styled.img`
height: 100px;
`

export const ErrorContainer = styled.p`
display: flex;
flex-direction: column;
align-items: center;
gap: 6px;
`

export const ErrorType = styled.p`
font-size: 57px;
color: #f35e5e;
`

export const ErrorMessage = styled.p`
font-size: 18px;
color: white;
`