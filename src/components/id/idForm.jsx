import React from "react";
// import inputFields from "../../data/inputFields.json";
// import { calculateTotalFileSize } from "../../utils/calculateTotalFileSize";
// import { FormField } from "./formField";
// import { sendFormData } from "../../services/api";
// import { Link } from "react-router-dom";
import "../../style/privacyStyles/privacy.scss";

// const MAX_TOTAL_FILE_SIZE = 20 * 1024 * 1024; // 20MB

export const IdForm = (props) => {
  const { id, nome } = props.filteredCourses;

  // const [formData, setFormData] = useState(
  //   inputFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  // );

  // const [files, setFiles] = useState([]);

  // const [approved, setApproved] = useState(false);

  // const handleApproved = (e) => {
  //   setApproved(e.target.checked);
  // };

  // const handleFormData = (e, name) => {
  //   setFormData((prevData) => ({ ...prevData, [name]: e.target.value }));
  // };

  // const addFiles = (event) => {
  //   const newFiles = Array.from(event.target.files).map((file) => ({
  //     id: Date.now() + Math.random(),
  //     file
  //   }));
  //   setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (files.length > 0) {
  //     const { totalSize, totalSizeInMB } = calculateTotalFileSize(files);

  //     if (totalSize > MAX_TOTAL_FILE_SIZE) {
  //       alert(
  //         `O tamanho dos ficheiros anexados (${totalSizeInMB.toFixed(2)} MB) excede os 20MB.`
  //       );
  //       return;
  //     }
  //   }

  //   const data = new FormData();
  //   data.append("Curso Pretendido", `${id} ${nome}`);
  //   Object.keys(formData).forEach((key) => data.append(key, formData[key]));
  //   files.forEach((file) => data.append("files", file.file));

  //   if (!approved) {
  //     alert("Por favor aceite os termos de proteção de dados");
  //     return;
  //   }

  //   try {
  //     // Call backend
  //     const response = await sendFormData(data);
  //     if (response.success) {
  //       alert("Formulário enviado com sucesso");

  //       // Reset form data
  //       setFormData(
  //         inputFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  //       );
  //       setFiles([]);
  //       setApproved(false);
  //     } else {
  //       alert(response.error);
  //     }
  //   } catch (error) {
  //     console.error("Erro ao enviar o formulário:", error);
  //     alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
  //   }
  // };

  // const deleteFiles = (fileId) => {
  //   setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
  // };

  // const { totalSizeInMB } = calculateTotalFileSize(files);

  return (
    <section className="form-container">
      <h2>PRÉ-INSCRIÇÃO</h2>
      <article>
        <p>
          Para efeitos de pré-inscrição no curso pretendido (UFCD {id} - {nome})
          pedimos que nos contacte através do número de telefone{" "}
          <b>227 130 875</b> ou que nos envie um email para
          <b> formacelf@gmail.com</b> a manifestar o seu interesse nesta
          formação.
        </p>

        <p>
          A equipa do CELF está prontamente a trabalhar num formulário de
          inscrição de formandos, mas até lá agradecemos que nos contacte
          diretamente. Obrigado pela compreensão.
        </p>
      </article>

      {/* <article>
        <p>
          No seguinte formulário poderá efetuar a pré-inscrição na formação
          pretendida. Para um processo mais rápido e simples pedimos que anexe
          os <span>seguintes documentos:</span>
        </p>

        <ul>
          <li>Cópia do cartão de cidadão;</li>
          <li>Certificado de habilitações;</li>
          <li>IBAN - caso tenha direito a subsídio de alimentação;</li>
          <li>Declaração com horário da empresa.</li>
        </ul>
        <form className="course-form" onSubmit={handleSubmit}>
          <div className="input-container">
            {inputFields.map((field) => (
              <FormField
                key={field.label}
                {...field}
                value={formData[field.name]}
                onChange={(e) => handleFormData(e, field.name)}
              />
            ))}
          </div>
          <div className="wanted-course-container">
            <label htmlFor="curso">Curso Pretendido*</label>
            <input
              type="text"
              readOnly
              name="curso"
              value={id + " - " + nome}
            />
          </div>
          <div className="file-upload-container">
            <label htmlFor="anexos">Anexos</label>
            <div className="file-upload-input">
              {files && files.length > 0 ? (
                <>
                  <div className="attached-files-container">
                    {files.map((file, index) => (
                      <div key={index} className="attached-files-content">
                        <p>{file.file.name}</p>
                        <button
                          type="button"
                          className="file-delete-button"
                          onClick={() => deleteFiles(file.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8 0C3.581 0 0 3.582 0 8C0 12.418 3.581 16 8 16C12.419 16 16 12.418 16 8C16 3.582 12.419 0 8 0ZM11.707 10.293C11.8945 10.4805 11.9998 10.7348 11.9998 11C11.9998 11.2652 11.8945 11.5195 11.707 11.707C11.5195 11.8945 11.2652 11.9998 11 11.9998C10.7348 11.9998 10.4805 11.8945 10.293 11.707L8 9.414L5.707 11.707C5.61435 11.8002 5.50419 11.8741 5.38285 11.9246C5.26152 11.9751 5.13141 12.001 5 12.001C4.86859 12.001 4.73848 11.9751 4.61715 11.9246C4.49581 11.8741 4.38565 11.8002 4.293 11.707C4.10553 11.5195 4.00021 11.2652 4.00021 11C4.00021 10.7348 4.10553 10.4805 4.293 10.293L6.586 8L4.293 5.707C4.10549 5.51949 4.00015 5.26518 4.00015 5C4.00015 4.73482 4.10549 4.48051 4.293 4.293C4.48051 4.10549 4.73482 4.00015 5 4.00015C5.26518 4.00015 5.51949 4.10549 5.707 4.293L8 6.586L10.293 4.293C10.4805 4.10549 10.7348 4.00015 11 4.00015C11.2652 4.00015 11.5195 4.10549 11.707 4.293C11.8945 4.48051 11.9998 4.73482 11.9998 5C11.9998 5.26518 11.8945 5.51949 11.707 5.707L9.414 8L11.707 10.293Z"
                              fill="#767474"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="add-more-files-container">
                    <button type="button" className="add-more-files-button">
                      <input
                        className="hidden-input"
                        type="file"
                        name="anexos"
                        id="anexos"
                        multiple
                        onChange={addFiles}
                        accept="image/*,application/pdf"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                      >
                        <path
                          d="M17.5001 29.4001C10.9201 29.4001 5.6001 24.0801 5.6001 17.5001C5.6001 10.9201 10.9201 5.6001 17.5001 5.6001C24.0801 5.6001 29.4001 10.9201 29.4001 17.5001C29.4001 24.0801 24.0801 29.4001 17.5001 29.4001ZM17.5001 7.0001C11.6901 7.0001 7.0001 11.6901 7.0001 17.5001C7.0001 23.3101 11.6901 28.0001 17.5001 28.0001C23.3101 28.0001 28.0001 23.3101 28.0001 17.5001C28.0001 11.6901 23.3101 7.0001 17.5001 7.0001Z"
                          fill="black"
                        />
                        <path
                          d="M11.2 16.7998H23.8V18.1998H11.2V16.7998Z"
                          fill="black"
                        />
                        <path
                          d="M16.8 11.2002H18.2V23.8002H16.8V11.2002Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <div className="attached-files-placeholder">
                  <input
                    className="hidden-input"
                    type="file"
                    name="anexos"
                    id="anexos"
                    multiple
                    onChange={addFiles}
                    accept="image/*,application/pdf"
                  />
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>Clique para adicionar anexos</span>
                </div>
              )}
            </div>

            <span className="total-size-indicator">
              Tamanho dos Ficheiros: {totalSizeInMB} MB /{" "}
              {(MAX_TOTAL_FILE_SIZE / (1024 * 1024)).toFixed(2)} MB
            </span>
          </div>

          <div className="privacy-container">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              value="Sim"
              checked={approved}
              onChange={handleApproved}
            />
            <label htmlFor="privacy">
              Autorizo a utilização dos meus dados pessoais de acordo com o{" "}
              <Link to={"/privacy-policy"}>
                Regulamento Geral de Proteção de Dados
              </Link>
              .
            </label>
          </div>

          <button type="submit" className="red-button">
            Submeter
          </button>
        </form>
      </article> */}
    </section>
  );
};
