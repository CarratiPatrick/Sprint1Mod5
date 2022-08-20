import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import S from "./Form.module.css";

const Form = () => {
  return (
    <form className={S.form} >
      <div className={S.area}>
        <Label texto="Seu nome:" />
        <Input type="text" />
      </div>
      <div className={S.area}>
        <Label texto="E-mail:" />
        <Input type="email" />
      </div>
      <div className={S.area}>
        <Label texto="CPF:" />
        <Input type="text" />
      </div>
      <div className={S.areaOpcao}>
        <div className={S.opcao}>
          <input type= "radio" nome="sexo" />
          <Label texto="Masculino" />
        </div>
        <div>
          <input type="radio"/>
          <Label texto="Feminino" />
        </div>
      </div>
      <Button css={S.botaoForm} texto="Enviar"/>
    </form>
  );
};

export default Form;
