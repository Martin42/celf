import React from "react";
import { FinanciadaHero } from "./financiadaHero";
import { FinanciadaInfo } from "./financiadaInfo";

function Financiada() {
  return (
    <section className="main-container">
      <FinanciadaHero />
      <FinanciadaInfo />
    </section>
  );
}

export default Financiada;
