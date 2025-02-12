import styled from "@emotion/styled";

interface ButtonStyledProps {
  disabled: boolean;
  $isRed?: boolean
}

export const MainButton = styled.button<ButtonStyledProps>`
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: ${({disabled, $isRed})=>disabled ? 'grey': $isRed ? 'red' : '#3678B4'};
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 600;
  cursor: ${({disabled})=>disabled? "not-allowed" : "pointer"};
  text-align: center;
`;
