import React, { useState } from "react";

export const IdInfo = (props) => {
  const { nome, id, carga, pontos, objetivos, custo } = props.filteredCourses;

  console.log(props.filteredCourses);

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
        <p className="course-cost">{custo}</p>
        {courseDetails.map((detail, index) => (
          <p key={index}>
            <span>{detail.label}:</span> {detail.value}
          </p>
        ))}
      </article>

      <article>
        <div>
          <p>
            <span>Objetivos da UFCD</span>
          </p>

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
          <p>
            <span>Conteúdos</span>
          </p>

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
