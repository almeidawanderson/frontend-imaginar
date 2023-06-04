import React from "react";
import ButtonStyled from "./styles";

interface IButtonFormProps {
  text: string;
  disableButton: boolean;
}

function ButtonForm(props: IButtonFormProps) {
  return(
    <ButtonStyled
      disabled={props.disableButton}
      type="submit"
      isDisableButton={props.disableButton}    
    >
      {props.text}
    </ButtonStyled>
  )
}

export default ButtonForm;