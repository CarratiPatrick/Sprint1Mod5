import React from 'react'
import Button from '../Button/Button'
import Title from '../Title/Title'
import S from './Header.module.css'

const Header = () => {
  return (
    <header className={S.header}>
    <Title className={S.titulo} text1= "uma seleção de produtos" text2="especial para você " />
     <p> Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!      </p> 
    <div className={S.divBotao}>
    <Button css={S.botao} texto="Conheça a Linx" />
    <Button css={S.botao} texto="Ajude o algorítimo" />
    <Button css={S.botao} texto="Seus produtos" />
    <Button css={S.botao} texto="Compartilhe" />
    
    </div>
     </header>
  )
}

export default Header
