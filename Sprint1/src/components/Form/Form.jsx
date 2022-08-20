import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";

const Form = () => {
  return (
    <form>
      <div>
        <Label texto="Seu nome:" />
        <Input type="text" />
      </div>
      <div>
        <Label texto="E-mail:" />
        <Input type="email" />
      </div>
      <div>
        <Label texto="CPF:" />
        <Input type="text" />
      </div>
      <div>
        <div>
          <Input type="radio" nome="sexo" />
          <Label texto="Masculino" />
        </div>
        <div>
          <Input type="radio" nome="sexo" />
          <Label texto="Feminino" />
        </div>
      </div>
      <Button texto="Enviar"/>
    </form>
  );
};

export default Form;
