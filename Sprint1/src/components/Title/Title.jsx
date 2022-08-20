import React from 'react'
import S from "./Title.module.css"

const Title = ({text1,text2}) => {
  return (
    <div className={S.conteinerTitulo}>
      <h2 className={S.h2}>{text1}</h2>
      <h1 className={S.h1}>{text2}</h1>
    </div>
  )
}

export default Title
