import "../../style/homeStyles/home.scss";
import { FAQ } from "./faq";
import { Hero } from "./hero";
import { Services } from "./services";

function Home() {
  return (
    <section className="main-container">
      <Hero />
      <Services />
      <FAQ />
    </section>
  );
}

export default Home;
