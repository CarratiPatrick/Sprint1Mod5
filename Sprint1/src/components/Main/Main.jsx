import React from "react";
import Form from "../Form/Form";
import Texto from "../Texto/Texto";

const Main = () => {
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
      </section>
    </main>
  );
};

export default Main;
