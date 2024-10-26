import "./App.scss";
import { FAQ } from "./components/home/faq";
import { FindUs } from "./components/home/findUs";
import { Hero } from "./components/home/hero";
import { Services } from "./components/home/services";

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
