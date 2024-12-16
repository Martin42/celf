import React from "react";
import { useLocation } from "react-router-dom";
import { FinanciadaInfo } from "./financiada/financiadaInfo";
import { NaoFinanciadaInfo } from "./naoFinanciada/naoFinanciadaInfo";

export const FormacaoInfo = () => {
  const location = useLocation();
  const isFinanciada = location.pathname === "/formacao/financiada";
  return (
    <section className="formacao-info-container">
      {isFinanciada ? <FinanciadaInfo /> : <NaoFinanciadaInfo />}
    </section>
  );
};
