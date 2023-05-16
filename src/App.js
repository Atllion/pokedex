import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="card__container">
        <section className="card__header">
          <h1>Charmander</h1>
          <span>#004</span>
        </section>
        <section className="card__pokemon_img">
          <img src="/icons/charmander-imagen.svg" alt="charmander" />
        </section>

        <section className="card__info">
          <section className="card__type">
            <h2>Fire</h2>
          </section>

          <section className="card__about">
            <h2>About</h2>
          </section>

          <section className="card__size-pokemon">
            <section className="card__measure">
              <div className="card__measure-values">
                <img src="/icons/wigth-icon.svg" alt="weight-icon"></img>
                <span>8,5 kg</span>
              </div>
              <div className="card__measure-span">
                <span>Weight</span>
              </div>
            </section>

            <span className="vertical-line"></span>

            <section className="card__measure">
              <div className="card__measure-values">
                <img src="/icons/heigth-icon.svg" alt="heigth-icon"></img>
                <span>0,6 m</span>
              </div>
              <div className="card__measure-span">
                <span>Height</span>
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
