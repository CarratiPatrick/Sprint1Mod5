import React from "react";
import Form from "../Form/Form";
import Texto from "../Texto/Texto";
import { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import FormConvite from "../FormConvite/FormConvite";
import { useEffect } from "react";
import S from "./Main.module.css";
const Main = () => {
  const[produto,setProduto]= useState([]);
  const[pag,setPag]= useState(1);
  async function hendleApi(){
    const response = await fetch(
      `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pag}`
    );
    const json = await response.json();
    setProduto([...produto,...json.products]);
  }
  const proxPag =()=>{
    setPag(pag+1)
  }
  useEffect(() => {
    hendleApi();
  }, [pag]);
  
  return (
    <main className={S.main}>
      <section className={S.primeiraSec}>
        <Texto />
        <Form />
      </section>
      <section className={S.segundaSec} >
      <div>
      <h3>Sua seleção especial!</h3>
      </div>
      <section className={S.terceiraSec}>
      {produto.length>0 &&
        produto.map((prod,index) => {
          return (
            <Card 
              key={index}
              img={prod.image}
              nome={prod.name}
              texto={prod.description}
              valor={prod.oldPrice}
              desc={prod.price}
              parc={prod.installments.count}
              ou={prod.installments.value}
            />
          );
        })}
      </section>
      <Button onClick={proxPag} texto="Adquira mais produtos aqui"/>
      </section>
      <section >
      <div className={S.quartaSec}>
      <h3>Compartilhe a novidade</h3>
      </div>
      <div>
      <p className={S.p}>Quer que seus amigos também ganhem a lista personalizada deles?
      Preencha agora!</p>
      <FormConvite/>
      </div>
      </section>
    </main>
  );
};

export default Main;
