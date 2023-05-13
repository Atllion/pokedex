import "./App.css";
// import { Pokemon } from "./cards/pokemon";

function App() {
  return (
    <div className="App">
      <main className="container">
        <h1>Charmander</h1>
        <h3>#004</h3>
        <img src="charmander.jpg" alt="charmander" />
        <section className="info-pokemon">
          <span className="type">Fire</span>
          <h2>About</h2>
          <section className="weight">
            <img className="icon-weight" />
            <p className="info-weight">8,5 kg</p>
            <span>Weight</span>
          </section>
          <section className="height">
            <img className="icon-height" />
            <p className="info-height">0,6 m</p>
            <span>Height</span>
          </section>
          <p>
            It has a preference for hot things. When it rains, steam is said to
            spout from the top of its tail.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
