import React from "react";
import { Formulario } from "../components/Formulário/Formulario";
import { BreadCrumb } from "../components/TitleAndBread/BreadCrumb";
import { Titulo } from "../components/TitleAndBread/Title";

const FaleConosco = () => {
  return (
    <main>
      <BreadCrumb />
      <Titulo />
      <Formulario />
    </main>
  );
};
export { FaleConosco };
