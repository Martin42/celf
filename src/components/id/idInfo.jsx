import React, { useState } from "react";

export const IdInfo = (props) => {
  const { nome, id, carga, pontos, objetivos, custo } = props.filteredCourses;
  const courseDetails = [
    { label: "Definição da UFCD", value: `${nome}.` },
    { label: "Código da UFCD", value: id },
    { label: "Carga Horária", value: `${carga}.` },
    { label: "Pontos de Crédito", value: pontos }
  ];

  const [areObjectivesVisible, setObjectivesVisible] = useState(true);

  const toggleObjectivesVisibility = () => {
    setObjectivesVisible(!areObjectivesVisible);
  };

  return (
    <section className="formacao-info-container">
      <h2>DETALHES DO CURSO</h2>
      <article>
        <h3 className="course-cost">{custo}</h3>
        {courseDetails.map((detail, index) => (
          <div key={index}>
            <h4>{detail.label}</h4>
            <p>{detail.value}</p>
          </div>
        ))}
        <div>
          <h4>Objetivos da UFCD</h4>

          <p onClick={toggleObjectivesVisibility} className="objectives-toggle">
            {areObjectivesVisible ? "Esconder Objetivos" : "Mostrar Objetivos"}
          </p>

          {areObjectivesVisible && (
            <ul>
              {objetivos.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h4>Conteúdos</h4>
          <p>
            Detalhes relacionados aos conteúdos encontram-se disponíveis no
            website do{" "}
            <a
              href="https://catalogo.anqep.gov.pt/ufcdPesquisa"
              target="blank_"
            >
              Catálogo Nacional de Qualificações.
            </a>
          </p>
        </div>
      </article>
    </section>
  );
};
