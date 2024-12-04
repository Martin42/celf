import React from "react";
import inputFields from "../../data/inputFields.json";

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
          os <span>seguintes documentos:</span>
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

        <div className="file-upload-container">
          <label htmlFor="anexos">Anexos</label>
          <div className="file-upload-input">
            <input type="file" name="anexos" id="anexos" multiple />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 7.99707V15.9971C7 17.3232 7.52678 18.5949 8.46447 19.5326C9.40215 20.4703 10.6739 20.9971 12 20.9971C13.3261 20.9971 14.5979 20.4703 15.5355 19.5326C16.4732 18.5949 17 17.3232 17 15.9971V6.49707C17 5.56881 16.6313 4.67857 15.9749 4.0222C15.3185 3.36582 14.4283 2.99707 13.5 2.99707C12.5717 2.99707 11.6815 3.36582 11.0251 4.0222C10.3687 4.67857 10 5.56881 10 6.49707V14.9971C10 15.5275 10.2107 16.0362 10.5858 16.4113C10.9609 16.7864 11.4696 16.9971 12 16.9971C12.5304 16.9971 13.0391 16.7864 13.4142 16.4113C13.7893 16.0362 14 15.5275 14 14.9971V7.99707"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Clique para adicionar anexos</span>
          </div>
        </div>

        <button type="submit" className="red-button">
          Submeter
        </button>
      </form>
    </section>
  );
};