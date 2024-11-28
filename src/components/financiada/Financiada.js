import React from "react";
import { FinanciadaHero } from "./financiadaHero";
import { FinanciadaInfo } from "./financiadaInfo";
import { FinanciadaCourses } from "./financiadaCourses";

function Financiada() {
  return (
    <section className="main-container">
      <FinanciadaHero />
      <FinanciadaInfo />
      <FinanciadaCourses />
    </section>
  );
}

export default Financiada;
