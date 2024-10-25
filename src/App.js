import "./App.scss";
import { FAQ } from "./components/faq";
import { FindUs } from "./components/findUs";
import { Hero } from "./components/hero";
import { Services } from "./components/services";

function App() {
  return (
    <section className="main-container">
      <Hero />
      <Services />
      <FAQ />
      <FindUs />
    </section>
  );
}

export default App;
