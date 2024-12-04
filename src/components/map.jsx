import React from "react";
import useViewport from "../utils/useViewport";
import "../style/map.scss";

export const Map = () => {
  const { width } = useViewport();

  return (
    <section className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.152840864721!2d-8.600253423385233!3d41.087507071339566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247b0c4db503b9%3A0xb93de9e47d983a18!2sR.%20Souto%20Megide%2054%2C%204410-253%20Canelas!5e0!3m2!1sen!2spt!4v1732120835954!5m2!1sen!2spt"
        width={width}
        height={450}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </section>
  );
};
