import React, { useState } from "react";
import "../../style/form.scss";

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

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        body: data
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <section className="form-container">
      <h2>TEM ALGUMA DÚVIDA</h2>
      <form onSubmit={handleSubmit}>
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

        <span className="mandatory-field">(*) Campos Obrigatórios</span>
        <button type="submit" className="red-button">
          Submeter
        </button>
      </form>
    </section>
  );
};
