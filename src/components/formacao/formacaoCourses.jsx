import React from "react";
import { useLocation } from "react-router-dom";
import { FinanciadaCourses } from "./financiada/financiadaCourses";
import { NaoFinanciadaCourses } from "./naoFinanciada/naoFinanciadaCourses";

export const FormacaoCourses = () => {
  const location = useLocation();
  const isFinanciada = location.pathname === "/formacao/financiada";
  return (
    <section className="formacao-courses-container">
      {isFinanciada ? <FinanciadaCourses /> : <NaoFinanciadaCourses />}
    </section>
  );
};
