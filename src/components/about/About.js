import React from "react";
import { AboutHero } from "./aboutHero";
import { Contacts } from "./aboutContact";
import { Map } from "./map";
import { Form } from "./aboutForm";

function About() {
  return (
    <section className="main-container">
      <AboutHero />
      <Contacts />
      <Map />
      <Form />
    </section>
  );
}

export default About;
