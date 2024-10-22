import "./App.scss";
import { FAQ } from "./components/faq";
import { Hero } from "./components/hero";
import { Services } from "./components/services";

function App() {
  return (
    <div className="main-container">
      <Hero />
      <Services />
      <FAQ />
    </div>
  );
}

export default App;
