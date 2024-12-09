import React from "react";
import Collapsible from "react-collapsible";
import courses from "../../data/courses.json";
import { Link, useLocation } from "react-router-dom";

const trigger = (element) => {
  return (
    <div className="trigger-container open">
      <p>Área de {element}</p>
      <button
        type="button"
        className="trigger-button"
        aria-label="expandable element"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M1 8C1 6.896 1.54069 6 2.2069 6H13.7931C14.1132 6 14.4202 6.21071 14.6465 6.58579C14.8728 6.96086 15 7.46957 15 8C15 8.53043 14.8728 9.03914 14.6465 9.41421C14.4202 9.78929 14.1132 10 13.7931 10H2.2069C1.54069 10 1 9.104 1 8Z"
            fill="#D43650"
          />
        </svg>
      </button>
    </div>
  );
};

const triggerIsOpen = (element) => {
  return (
    <div className="trigger-container">
      <p>Área de {element}</p>
      <button
        type="button"
        className="trigger-button"
        aria-label="retractable element"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_672_206)">
            <path
              d="M13.4388 6.26864H9.82908V2.65888C9.82908 2.1802 9.63892 1.72112 9.30044 1.38264C8.96196 1.04416 8.50288 0.854004 8.0242 0.854004C7.54552 0.854004 7.08644 1.04416 6.74796 1.38264C6.40948 1.72112 6.21932 2.1802 6.21932 2.65888L6.28339 6.26864H2.60957C2.13088 6.26864 1.6718 6.45879 1.33332 6.79727C0.994844 7.13576 0.804688 7.59483 0.804688 8.07352C0.804688 8.5522 0.994844 9.01128 1.33332 9.34976C1.6718 9.68824 2.13088 9.87839 2.60957 9.87839L6.28339 9.81432L6.21932 13.4881C6.21932 13.9668 6.40948 14.4259 6.74796 14.7644C7.08644 15.1029 7.54552 15.293 8.0242 15.293C8.50288 15.293 8.96196 15.1029 9.30044 14.7644C9.63892 14.4259 9.82908 13.9668 9.82908 13.4881V9.81432L13.4388 9.87839C13.9175 9.87839 14.3766 9.68824 14.7151 9.34976C15.0536 9.01128 15.2437 8.5522 15.2437 8.07352C15.2437 7.59483 15.0536 7.13576 14.7151 6.79727C14.3766 6.45879 13.9175 6.26864 13.4388 6.26864Z"
              fill="#D43650"
            />
          </g>
          <defs>
            <clipPath id="clip0_672_206">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

const courseCard = (element) => {
  const filteredCourses = courses.filter((e) => e.area === element);

  return filteredCourses.map((element) => (
    <div className="courses-card-container">
      <div className="courses-card-img">
        <img src={element.mobile} alt="course" loading="lazy" />
        <span>UFCD {element.id}</span>
      </div>
      <div className="courses-card-info">
        <div className="courses-card-text">
          <p>{element.nome}</p>
          <span>Presencial/Elearning - {element.carga}</span>
        </div>
        <Link to={`${element.id}`}>
          <button className="red-button">Inscreva-se</button>
        </Link>
      </div>
    </div>
  ));
};

export const FormacaoCourses = () => {
  const location = useLocation();
  const isFinanciada = location.pathname.includes("/formacao/financiada");

  const financedAreas = [
    "Técnico de Comunicação",
    "Técnico de Operador de Informática",
    "Programador de Informática",
    "Contabilidade",
    "Cursos Extra-Catálogo"
  ];

  const nonFinancedAreas = [
    "Técnico Auxiliar de Saúde",
    "Técnico em Geriatria",
    "Assistente Familiar e de Apoio à Comunidade"
  ];

  const areas = isFinanciada ? financedAreas : nonFinancedAreas;

  return (
    <section className="formacao-courses-container">
      <h2>CURSOS {isFinanciada ? "FINANCIADOS" : "NÃO-FINANCIADOS"}</h2>
      <div className="collapsible-courses-container">
        {areas.map((element, index) => (
          <Collapsible
            className="collapsible-courses-closed"
            key={index}
            openedClassName="collapsible-courses-open"
            overflowWhenOpen="auto"
            transitionTime={500}
            trigger={triggerIsOpen(element)}
            triggerWhenOpen={trigger(element)}
          >
            {courseCard(element)}
          </Collapsible>
        ))}
      </div>
    </section>
  );
};
