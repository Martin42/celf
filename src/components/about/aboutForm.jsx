import React from "react";
import "../../style/aboutStyles/aboutForm.scss";
export const Form = () => {
  return (
    <section className="form-container">
      <h1>TEM ALGUMA DÚVIDA</h1>
      <form action="submit">
        <div className="email-container">
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="questions-container">
          <label htmlFor="question">Questão*</label>
          <textarea
            name="question"
            id="question"
            placeholder="Escreva aqui a sua questão"
            required
          ></textarea>
        </div>

        <span className="mandatory-field">(*) Campos Obrigatórios</span>
        <button type="submit" className="red-button">
          Submeter
        </button>
      </form>
    </section>
  );
};
