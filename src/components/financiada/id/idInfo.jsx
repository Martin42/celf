import React from "react";

export const IdInfo = (props) => {
  const { nome, id, carga, pontos, objetivos } = props.filteredCourses;
  return (
    <section className="financiada-info-container">
      <h1>DETALHES DO CURSO</h1>
      <article>
        <p>
          <span>Definição da UFCD:</span> {nome}
        </p>

        <p>
          <span>Código da UFCD:</span> {id}
        </p>

        <p>
          <span>Carga Horária:</span> {carga}
        </p>

        <p>
          <span>Pontos de Crédito</span> {pontos}
        </p>
      </article>

      <article>
        <p>
          <span>Objetivos da UFCD:</span>
        </p>

        <ul>
          {objetivos.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>

        <p>
          <span>Conteúdos:</span>
        </p>

        <ul>
          <li>
            Detalhes relacionados aos conteúdos encontram-se disponíveis no
            website do{" "}
            <a
              href="https://catalogo.anqep.gov.pt/ufcdPesquisa"
              target="blank_"
            >
              Catálogo Nacional de Qualificações
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};
