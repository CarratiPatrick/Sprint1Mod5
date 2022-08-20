import React from "react";
import Button from "../Button/Button";

const Card = ({ img, nome, texto, valor, desc, parc,ou }) => {
  return (
    <article>
      <picture>
        <img src={img} alt="produto" />
      </picture>
      <h3>{nome}</h3>
      <p>{texto}</p>
      <h4>De:{valor},00</h4>
      <h5>Por:{desc},00</h5>
      <p>ou{parc}x de:{ou}</p>
      <Button texto="Comprar"/>
    </article>
  );
};

export default Card;
