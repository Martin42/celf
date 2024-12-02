import React from "react";
import inputFields from "../../../data/inputFields.json";

const FormField = ({ label, type, autoComplete, placeholder, select }) => {
  const inputProps = {
    type,
    name: label,
    autoComplete: autoComplete || "off",
    placeholder,
    required: true
  };

  return (
    <div>
      <label htmlFor={label}>{label}*</label>
      {select ? (
        <select id={label} name={label}>
          {select.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input {...inputProps} />
      )}
    </div>
  );
};

export const IdForm = (props) => {
  const { id, nome } = props.filteredCourses;
  return (
    <section className="form-container">
      <h1>PRÉ-INSCRIÇÃO</h1>
      <article>
        <p>
          No seguinte formulário poderá efetuar a pré-inscrição na formação
          pretendida. Para um processo mais rápido e simples pedimos que anexe
          os <span>seguintes documentos</span>
        </p>

        <ul>
          <li>Cópia do cartão de cidadão;</li>
          <li>Certificado de habilitações;</li>
          <li>IBAN - caso tenha direito a subsídio de alimentação;</li>
          <li>Declaração com horário da empresa</li>
        </ul>
      </article>
      <form action="submit">
        {inputFields.map((field) => (
          <FormField key={field.label} {...field} />
        ))}

        <div className="course-input">
          <label htmlFor="curso">Curso Pretendido*</label>
          <input type="text" readOnly name="curso" value={id + " - " + nome} />
        </div>
      </form>
    </section>
  );
};
