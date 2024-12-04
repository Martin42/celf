import React from "react";
import { AboutHero } from "./aboutHero";
import { Contacts } from "./aboutContact";
import { Map } from "../map";
import { Form } from "./aboutForm";
import { AboutInfo } from "./aboutInfo";

function About() {
  return (
    <section className="main-container">
      <AboutHero />
      <AboutInfo />
      <Contacts />
      <Map />
      <Form />
    </section>
  );
}

export default About;
