import "./App.css";
// import { Pokemon } from "./cards/pokemon";

function App() {
  return (
    <div className="App">
      <main className="card__container">
        <section className="card__header">
          <h1>Charmander</h1>
          <span>#004</span>
        </section>

        {/* <img src="charmander.jpg" alt="charmander" /> */}

        <section className="card__info">
          <section className="card__type">
            <h2 className="type">Fire</h2>
          </section>

          <section className="card__about">
            <h2>About</h2>
          </section>

          <section className="card__size-pokemon">
            <section className="card__measure">
              <div className="card__measure-values">
                <i>#</i>
                <span className="card__measure-span-value">8,5 kg</span>
              </div>
              <div className="card__measure-span">
                <span className="card__measure-span-color">Weight</span>
              </div>
            </section>

            <section className="card__measure">
              <div className="card__measure-values">
                <i>#</i>
                <span className="card__measure-span-value">0,6 m</span>
              </div>
              <div className="card__measure-span">
                <span className="card__measure-span-color">Height</span>
              </div>
            </section>
          </section>
          <section className="card__description">
            <p>
              It has a preference for hot things. When it rains, steam is said
              to spout from the top of its tail.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
