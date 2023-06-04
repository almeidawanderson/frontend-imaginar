import React from "react";
import BoxForm from "./styles";

interface IBoxFormProps {
  onSubimit: React.FormEventHandler<HTMLDivElement>;
  children: React.ReactNode;
  component: 'form'
}

function BoxFormLogin(props: IBoxFormProps) {
  return <BoxForm component="form" onSubmit={props.onSubimit} />
}

export default BoxFormLogin;