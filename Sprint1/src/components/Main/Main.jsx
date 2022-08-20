import React from "react";
import Form from "../Form/Form";
import Texto from "../Texto/Texto";
import { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import FormConvite from "../FormConvite/FormConvite";

const Main = () => {
  const[info,setInfo]= useState([]);
  const[pag,setPag]= useState(1);
  async function handleRequisicao(){
    const response = await fetch(
      `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pag}`
    );
    const json = await response.json();
    setInfo([...info,...json.products]);
  }
  const proxPag =()=>{
    setPag(pag+1)
  }
  return (
    <main>
      <section>
        <Texto />
        <Form />
      </section>
      <section>
      <div>
      <h3>Sua seleção especial!</h3>
      </div>
      <div>
      <Card/>
      </div>
      <Button onClick={proxPag} texto="Adquira mais produtos aqui"/>
      </section>
      <section>
      <div>
      <h3>Compartilhe a novidade</h3>
      </div>
      <div>
      <p>Quer que seus amigos também ganhem a lista personalizada deles?
      Preencha agora!</p>
      <FormConvite/>
      </div>
      </section>
    </main>
  );
};

export default Main;
