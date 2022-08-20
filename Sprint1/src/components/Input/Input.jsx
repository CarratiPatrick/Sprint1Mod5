import React from 'react'

const Input = ({tipo,nome,css}) => {
  return (
   <input className={css} type={tipo} name={nome}/>
  )
}

export default Input
