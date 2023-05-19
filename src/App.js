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
    // console.log(charmander.types);

    return {
      id: charmander.id,
      name: charmander.name,
      weight: "irrelevantWeight",
      height: "irrelevantHeight",
      types: ["irrelevantType"],
      src: "irrelevantSrc",
      description: "irrelevantDescription",
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
