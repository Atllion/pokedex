import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./_components/Card/Card";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/charmander"
    );

    const charmander = await response.json();
    console.log(charmander);
    console.log(charmander.types);

    return {
      id: charmander.id,
      name: charmander.name,
      weight: charmander.weight,
      height: charmander.height,
      types: charmander.types.map(({ type }) => type.name),
      src: charmander.sprites.front_default,
      description:
        "It has a preference for hot things. When it rains, steam is said to spout from the top of its tail.",
    };
  };

  useEffect(() => {
    const onLoad = async () => {
      const charmander = await fetchPokemons();
      setPokemons([charmander]);
    };

    onLoad();
  }, []);

  return (
    <div className="App">
      <div className="pokedex__container">
        <nav className="pokedex__nav-bar">
          <img src="/Icons/pokeball-icon.svg" alt="pokeball-icon" />
          <h1>My Pokedex</h1>
        </nav>

        <main className="cards__container">
          {pokemons.map((pokemon) => (
            <Card pokemon={pokemon} />
          ))}
        </main>

        <footer>Imagen Footer</footer>
      </div>
    </div>
  );
}

export default App;
