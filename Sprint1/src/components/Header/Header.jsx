import React from 'react'
import Button from '../Button/Button'
import Title from '../Title/Title'

const Header = () => {
  return (
    <header>
    <Title text1= "uma seleção de produtos" text2="especial para você " />
     <p> Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!      </p> 
    <div>
    <Button texto="Conheça a Linx" />
    <Button texto="Ajude o algorítimo" />
    <Button texto="Seus produtos" />
    <Button texto="Compartilhe" />
    
    </div>
     </header>
  )
}

export default Header
