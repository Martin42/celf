import React, { useState } from "react";
import "../../style/form.scss";
import { sendFormData } from "../../services/api";

export const Form = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleFormData = (e, label) => {
    setUserInfo((prevData) => ({ ...prevData, [label]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    for (let key in userInfo) {
      data.append(key, userInfo[key]);
    }

    // Call backend
    const response = await sendFormData(data);
    if (response.success) {
      alert("Email sent successfully!");
    } else {
      alert(response.error);
    }
  };

  return (
    <section className="form-container">
      <h2>TEM ALGUMA DÚVIDA</h2>
      <form onSubmit={handleSubmit} className="about-form">
        <div>
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            autoComplete="email"
            required
            onChange={(e) => handleFormData(e, "email")}
          />
        </div>

        <div>
          <label htmlFor="question">Questão*</label>
          <textarea
            name="question"
            id="question"
            placeholder="Escreva aqui a sua questão"
            required
            onChange={(e) => handleFormData(e, "question")}
          ></textarea>
        </div>

        <span className="mandatory-field-text">(*) Campos Obrigatórios</span>
        <button type="submit" className="red-button">
          Submeter
        </button>
      </form>
    </section>
  );
};
