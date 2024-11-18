import "../../style/homeStyles/home.scss";
import { FAQ } from "./faq";
import { Hero } from "./hero";
import { Metrics } from "./metrics";
import { Services } from "./services";

function Home() {
  return (
    <section className="main-container">
      <Hero />
      <Services />
      <FAQ />
      <Metrics />
    </section>
  );
}

export default Home;
