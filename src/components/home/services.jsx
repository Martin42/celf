import React from "react";
import "../../style/homeStyles/services.scss";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <section className="services-container">
      <h2>OS NOSSOS SERVIÇOS</h2>

      <div className="card-container">
        {/* FORMACAO */}
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64px"
            height="48px"
            fill="none"
            viewBox="0 0 64 48"
            className="card-svg"
          >
            <g filter="url(#filter0_d_602_174)">
              <path
                d="M6.47656 14.1258L34.0002 3L61.5239 14.1258L34.0002 25.2517L6.47656 14.1258Z"
                stroke="#D43650"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M61.5237 14.2715V26.4874M18.9878 19.9867V36.4662C18.9878 36.4662 25.2854 42.7351 34 42.7351C42.7159 42.7351 49.0135 36.4662 49.0135 36.4662V19.9867"
                stroke="#D43650"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_602_174"
                x="0.976562"
                y="0.5"
                width="62.0474"
                height="46.7349"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-2" dy="1" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.831373 0 0 0 0 0.211765 0 0 0 0 0.313726 0 0 0 0.4 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_602_174"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_602_174"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div>
            <p className="card-title">Formação</p>
            <p className="card-subtitle">Oferecemos formação especializada</p>
          </div>
          <Link to={"/formacao/nao-financiada"} className="card-button">
            Saiba Mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M16.0382 9.79521C16.2489 9.58427 16.3672 9.29833 16.3672 9.00021C16.3672 8.70208 16.2489 8.41615 16.0382 8.20521L11.7962 3.96096C11.5851 3.74991 11.2989 3.63135 11.0004 3.63135C10.702 3.63135 10.4157 3.74991 10.2047 3.96096C9.99363 4.172 9.87507 4.45824 9.87507 4.75671C9.87507 5.05517 9.99363 5.34141 10.2047 5.55246L12.5267 7.87521L3.87543 7.87521C3.57706 7.87521 3.29091 7.99373 3.07993 8.20471C2.86895 8.41569 2.75043 8.70184 2.75043 9.00021C2.75043 9.29858 2.86895 9.58472 3.07993 9.7957C3.29091 10.0067 3.57706 10.1252 3.87543 10.1252L12.5267 10.1252L10.2047 12.4472C10.1002 12.5517 10.0173 12.6758 9.96073 12.8123C9.90418 12.9488 9.87507 13.0952 9.87507 13.243C9.87507 13.3907 9.90418 13.5371 9.96073 13.6736C10.0173 13.8101 10.1002 13.9342 10.2047 14.0387C10.3092 14.1432 10.4332 14.2261 10.5698 14.2827C10.7063 14.3392 10.8526 14.3683 11.0004 14.3683C11.1482 14.3683 11.2945 14.3392 11.4311 14.2827C11.5676 14.2261 11.6917 14.1432 11.7962 14.0387L16.0382 9.79521Z"
                fill="#D43650"
              />
            </svg>
          </Link>
        </div>

        {/* ALUGER */}
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            className="card-svg"
          >
            <g filter="url(#filter0_d_602_187)">
              <path
                d="M32.6663 28.2229C39.9372 28.2229 45.833 22.3521 45.833 15.1104C45.833 7.87083 39.9372 2 32.6663 2C25.3955 2 19.5059 7.87083 19.5059 15.1104C19.5059 18.4646 21.0351 20.9042 21.0351 20.9042L5.11424 36.7583C4.39966 37.4708 3.39966 39.3208 5.11424 41.0292L6.95174 42.8583C7.66633 43.4688 9.46216 44.3229 10.9309 42.8583L13.0767 40.725C15.2184 42.8583 17.6684 41.6396 18.5872 40.4188C20.1163 38.2854 18.2809 36.15 18.2809 36.15L18.8934 35.5396C21.8309 38.4688 24.4038 36.7604 25.3226 35.5396C26.8538 33.4063 25.3226 31.2708 25.3226 31.2708C24.7101 30.0521 23.4851 30.0521 25.0163 28.5271L26.8538 26.6979C28.3226 27.9167 31.3434 28.2229 32.6705 28.2229H32.6663Z"
                stroke="#D43650"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M37.26 15.1126C37.2572 16.3278 36.772 17.4922 35.9109 18.3497C35.0499 19.2073 33.8835 19.6877 32.6683 19.6855C31.4531 19.6877 30.2868 19.2073 29.4257 18.3497C28.5647 17.4922 28.0794 16.3278 28.0767 15.1126C28.0778 14.5107 28.1974 13.9149 28.4287 13.3593C28.6601 12.8036 28.9986 12.299 29.425 11.8741C29.8514 11.4493 30.3572 11.1126 30.9137 10.8833C31.4702 10.654 32.0664 10.5365 32.6683 10.5376C33.2702 10.5365 33.8664 10.654 34.4229 10.8833C34.9794 11.1126 35.4853 11.4493 35.9117 11.8741C36.3381 12.299 36.6766 12.8036 36.9079 13.3593C37.1393 13.9149 37.2589 14.5107 37.26 15.1126Z"
                stroke="#D43650"
                strokeWidth="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_602_187"
                x="0.66748"
                y="0.5"
                width="48.6655"
                height="48.667"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.831373 0 0 0 0 0.211765 0 0 0 0 0.313726 0 0 0 0.4 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_602_187"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_602_187"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div>
            <p className="card-title">Aluguer de Salas</p>
            <p className="card-subtitle">
              Disponibilizamos salas totalmente equipadas
            </p>
          </div>
          <Link to={"/"} className="card-button">
            Saiba Mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M16.0382 9.79521C16.2489 9.58427 16.3672 9.29833 16.3672 9.00021C16.3672 8.70208 16.2489 8.41615 16.0382 8.20521L11.7962 3.96096C11.5851 3.74991 11.2989 3.63135 11.0004 3.63135C10.702 3.63135 10.4157 3.74991 10.2047 3.96096C9.99363 4.172 9.87507 4.45824 9.87507 4.75671C9.87507 5.05517 9.99363 5.34141 10.2047 5.55246L12.5267 7.87521L3.87543 7.87521C3.57706 7.87521 3.29091 7.99373 3.07993 8.20471C2.86895 8.41569 2.75043 8.70184 2.75043 9.00021C2.75043 9.29858 2.86895 9.58472 3.07993 9.7957C3.29091 10.0067 3.57706 10.1252 3.87543 10.1252L12.5267 10.1252L10.2047 12.4472C10.1002 12.5517 10.0173 12.6758 9.96073 12.8123C9.90418 12.9488 9.87507 13.0952 9.87507 13.243C9.87507 13.3907 9.90418 13.5371 9.96073 13.6736C10.0173 13.8101 10.1002 13.9342 10.2047 14.0387C10.3092 14.1432 10.4332 14.2261 10.5698 14.2827C10.7063 14.3392 10.8526 14.3683 11.0004 14.3683C11.1482 14.3683 11.2945 14.3392 11.4311 14.2827C11.5676 14.2261 11.6917 14.1432 11.7962 14.0387L16.0382 9.79521Z"
                fill="#D43650"
              />
            </svg>
          </Link>
        </div>

        {/* TRADUCOES */}
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="50"
            viewBox="0 0 44 50"
            fill="none"
            className="card-svg"
          >
            <g filter="url(#filter0_d_602_200)">
              <path
                d="M40.0195 44H8.89488C7.5915 44 6.3415 43.4894 5.41987 42.5806C4.49824 41.6718 3.98047 40.4391 3.98047 39.1538C3.98047 37.8686 4.49824 36.6359 5.41987 35.7271C6.3415 34.8183 7.5915 34.3077 8.89488 34.3077H36.7432M36.7432 34.3077C37.6121 34.3077 38.4455 33.9673 39.0599 33.3614C39.6743 32.7555 40.0195 31.9338 40.0195 31.0769V5.23077C40.0195 4.37392 39.6743 3.55216 39.0599 2.94627C38.4455 2.34038 37.6121 2 36.7432 2H8.89488C7.61389 1.99955 6.38334 2.49235 5.46539 3.37342C4.54744 4.25448 4.01463 5.45417 3.98047 6.71692V39.0246M36.7432 34.3077V44"
                stroke="#D43650"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.4438 16.5448H33.0316L24.972 27.7653H33.5034M10.5728 19.7239L14.0653 9.38865C14.1525 9.13103 14.3196 8.90696 14.543 8.74811C14.7664 8.58926 15.0348 8.50366 15.3102 8.50342C15.877 8.50342 16.3816 8.8588 16.5618 9.38865L20.0543 19.7239M11.8374 15.9826H18.7896"
                stroke="#D43650"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_602_200"
                x="0.480469"
                y="0.5"
                width="43.0391"
                height="49"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.831373 0 0 0 0 0.211765 0 0 0 0 0.313726 0 0 0 0.4 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_602_200"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_602_200"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div>
            <p className="card-title">Traduções</p>
            <p className="card-subtitle">Somos especialistas em traduções</p>
          </div>
          <Link to={"/"} className="card-button">
            Saiba Mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M16.0382 9.79521C16.2489 9.58427 16.3672 9.29833 16.3672 9.00021C16.3672 8.70208 16.2489 8.41615 16.0382 8.20521L11.7962 3.96096C11.5851 3.74991 11.2989 3.63135 11.0004 3.63135C10.702 3.63135 10.4157 3.74991 10.2047 3.96096C9.99363 4.172 9.87507 4.45824 9.87507 4.75671C9.87507 5.05517 9.99363 5.34141 10.2047 5.55246L12.5267 7.87521L3.87543 7.87521C3.57706 7.87521 3.29091 7.99373 3.07993 8.20471C2.86895 8.41569 2.75043 8.70184 2.75043 9.00021C2.75043 9.29858 2.86895 9.58472 3.07993 9.7957C3.29091 10.0067 3.57706 10.1252 3.87543 10.1252L12.5267 10.1252L10.2047 12.4472C10.1002 12.5517 10.0173 12.6758 9.96073 12.8123C9.90418 12.9488 9.87507 13.0952 9.87507 13.243C9.87507 13.3907 9.90418 13.5371 9.96073 13.6736C10.0173 13.8101 10.1002 13.9342 10.2047 14.0387C10.3092 14.1432 10.4332 14.2261 10.5698 14.2827C10.7063 14.3392 10.8526 14.3683 11.0004 14.3683C11.1482 14.3683 11.2945 14.3392 11.4311 14.2827C11.5676 14.2261 11.6917 14.1432 11.7962 14.0387L16.0382 9.79521Z"
                fill="#D43650"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
