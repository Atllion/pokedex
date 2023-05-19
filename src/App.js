import "./App.css";
import { Card } from "./_components/Card/Card";
import { useState, useEffect } from "react";

const pokemon = {
  id: "004",
  name: "Charmander",
  height: "4.3 m",
  weight: "6.5 kg",
  types: ["grass", "poison"],
  src: "https://...",
  description:
    "It has a preference for hot things. When it rains, steam is said to spout from the top of its tail.",
};

function App() {
  const [pokemons, setPokemon] = useState();
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/charmander"
      );
      const allPokemons = await response.json();
      setPokemon(allPokemons);
      console.log({ pokemons });
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Card pokemon={pokemon} />
    </div>
  );
}

export default App;
