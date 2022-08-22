import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'
import S from './FormConvite.module.css'

const FormConvite = () => {
  return (
    <form className={S.form}>
      <div className={S.conteiner}>
        <div>
        <Label texto= "Nome do seu amigo:"/>
        <Input type="texto"/>
        </div>
        <div>
        <Label texto="E-mail:"/>
        <Input type="email"/>
        </div>
      </div>
      <Button css={S.botao} texto="Enviar agora"/>
    </form>
  )
}

export default FormConvite
