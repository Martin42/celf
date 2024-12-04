import React from "react";
import { FormacaoHero } from "./formacaoHero";
import { FormacaoInfo } from "./formacaoInfo";
import { FormacaoCourses } from "./formacaoCourses";
import "../../style/formacaoStyles/formacao.scss";

function Formacao() {
  return (
    <section className="main-container">
      <FormacaoHero />
      <FormacaoInfo />
      <FormacaoCourses />
    </section>
  );
}

export default Formacao;
