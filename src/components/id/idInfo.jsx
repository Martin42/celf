import React, { useState } from "react";

export const IdInfo = (props) => {
  const { nome, id, carga, pontos, objetivos } = props.filteredCourses;

  const courseDetails = [
    { label: "Definição da UFCD", value: `${nome}.` },
    { label: "Código da UFCD", value: id },
    { label: "Carga Horária", value: `${carga}.` },
    { label: "Pontos de Crédito", value: pontos }
  ];

  const [areObjectivesVisible, setObjectivesVisible] = useState(false);

  const toggleObjectivesVisibility = () => {
    setObjectivesVisible(!areObjectivesVisible);
  };

  return (
    <section className="formacao-info-container">
      <h2>DETALHES DO CURSO</h2>
      <article>
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

          {/* TODO: Style this text to look like a link */}
          <p onClick={toggleObjectivesVisibility}>
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

          <ul>
            <li>
              Detalhes relacionados aos conteúdos encontram-se disponíveis no
              website do{" "}
              <a
                href="https://catalogo.anqep.gov.pt/ufcdPesquisa"
                target="blank_"
              >
                Catálogo Nacional de Qualificações.
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};
