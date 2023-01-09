import React from "react";
import { Formulario } from "../components/medioComponents/Formulário/Formulario";
import { BreadCrumb } from "../components/medioComponents/BreadCrumb/BreadCrumb";
import { MainTitles } from "../components/miniComponents/MainTitles/MainTitle";

const FaleConosco = () => {
  return (
    <main>
      <BreadCrumb />
      <MainTitles text="Institucional" estilo="h1" />
      <Formulario />
    </main>
  );
};
export { FaleConosco };
