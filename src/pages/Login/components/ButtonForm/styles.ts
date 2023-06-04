import styled, { css } from "styled-components";

interface IButtonStyledProps {
  isDisableButton: boolean;
}

const ButtonStyled = styled.button<IButtonStyledProps>`
  padding: 4px;
  background-color: #000000;
  border: none;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2rem;
  font-weight: 600;

  ${({ isDisableButton}) => 
  isDisableButton &&
   css`
    cursor: 'default';
    background-color: #cccccc;
  `}
`;

export default ButtonStyled;