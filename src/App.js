import "./App.css";
import { Card } from "./_components/Card/Card";

const pokemon = {
  id: "001",
  name: "Charmander",
  height: "4.3 m",
  weight: "6.5 kg",
  types: ["grass", "poison"],
  src: "https://...",
  description:
    "It has a preference for hot things. When it rains, steam is said to spout from the top of its tail.",
};

function App() {
  return (
    <div className="App">
      <Card pokemon={pokemon} />
    </div>
  );
}

export default App;
