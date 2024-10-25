import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [0, 1];

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle slide selection
  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();

    // Clean up listener when the component unmounts
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="carousel-container">
      <h1>ONDE NOS ENCONTRAR</h1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div>
              <p>Localização</p>
              <p className="findUs-text">
                Rua Souto de Megide, N54, 4410-238, VNGaia
              </p>
            </div>

            <div>
              <p>Email</p>
              <p className="findUs-text">formacelf@gmail.com</p>
            </div>

            <div>
              <p>Telemóvel</p>
              <p className="findUs-text">911 766 929</p>
            </div>

            <div>
              <p>Telefone</p>
              <p className="findUs-text">227 130 875</p>
            </div>

            <div>
              <p>Horário de Funcionamento</p>
              <p className="findUs-text">Segunda a Sexta das 09:00 às 18:00.</p>
            </div>
          </div>

          <div className="embla__slide">Slide 2</div>
        </div>
      </div>

      <div className="dot-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={index === selectedIndex ? "selected-dot" : "dot"}
            onClick={() => emblaApi.scrollTo(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
