import "./App.css";
import { Card } from "./_components/Card/Card";

const pokemon = {
  id: "001",
  name: "Bulbasaur",
  height: "4.3 m",
  weight: "6.5 kg",
  types: ["grass", "poison"],
  src: "https://...",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi. Integer eget urna eu mauris scelerisque ornare. Nam at finibus purus.",
};

function App() {
  return (
    <div className="App">
      <Card pokemon={pokemon} />
    </div>
  );
}

export default App;
