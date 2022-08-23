import React from "react";
import Button from "../Button/Button";
import S from "./Card.module.css";
const Card = ({ img, nome, texto, valor, desc, parc,ou }) => {
  return (
    <article className={S.cartao}>
      <picture className={S.img}>
        <img src={img} alt="produto" />
      </picture>
      <h3>{nome}</h3>
      <p>{texto}</p>
      <h4>De:{valor},00</h4>
      <h5>Por:{desc},00</h5>
      <p>ou {parc}x de:{ou}</p>
      <Button css ={S.botao}texto="Comprar"/>
    </article>
  );
};

export default Card;
