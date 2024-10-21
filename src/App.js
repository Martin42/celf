import "./App.scss";
import { Hero } from "./components/hero";
import { Services } from "./components/services";

function App() {
  return (
    <div className="main-container">
      <Hero />
      <Services />
    </div>
  );
}

export default App;
