import React from 'react'
import S from "./Footer.module.css"
const Footer = () => {
  return (
    <footer className={S.footer} >
    <div className={S.posicao}>
    <p className={S.texto}>Testando suas habilidades em HTML,CSS e JS.</p>
    <p className={S.texto}>Linx Impulse</p>
    <p className={S.texto}>2019</p>
    </div>
    
    </footer>
  )
}

export default Footer
