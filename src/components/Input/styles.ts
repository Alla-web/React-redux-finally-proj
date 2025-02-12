import styled from "@emotion/styled";

export const InputContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 4px; */
`;

export const InputElementStyled = styled.input`
  width: 100%;
  height: 48px;
  /* line-height: 48px; */
  border-radius: 50px;
  padding: 13px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid white;
  outline: none;
  font-size: 16px;
  &::placeholder {
    color: gray;
    font-size: 20px;
    font-weight: bold;
    color: rgb(255 255 255);
  }
`;

export const Label = styled.label``;

export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 18px;
`;
