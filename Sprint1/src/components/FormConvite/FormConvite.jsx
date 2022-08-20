import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'

const FormConvite = () => {
  return (
    <form>
      <div>
        <div>
        <Label texto= "Nome do seu amigo:"/>
        <Input type="texto"/>
        </div>
        <div>
        <Label texto="E-mail:"/>
        <Input type="email"/>
        </div>
      </div>
      <Button texto="Enviar agora"/>
    </form>
  )
}

export default FormConvite
