import "./Card.css";

export const Card = ({ pokemon }) => {
  return (
    <main className="card__container">
      <section className="card__header">
        <h1>{pokemon.name}</h1>
        <span>{pokemon.id}</span>
      </section>
      <section className="card__pokemon_img">
        <img src="/icons/charmander-imagen.svg" alt="charmander" />
      </section>

      <section className="card__info">
        <section className="card__type">
          <h2>{pokemon.types[0]}</h2>
        </section>

        <section className="card__about">
          <h2>About</h2>
        </section>

        <section className="card__size-pokemon">
          <section className="card__measure">
            <div className="card__measure-values">
              <img src="/icons/wigth-icon.svg" alt="weight-icon"></img>
              <span>{pokemon.weight}</span>
            </div>
            <div className="card__measure-span">
              <span>Weight</span>
            </div>
          </section>

          <span className="vertical-line"></span>

          <section className="card__measure">
            <div className="card__measure-values">
              <img src="/icons/heigth-icon.svg" alt="heigth-icon"></img>
              <span>{pokemon.height}</span>
            </div>
            <div className="card__measure-span">
              <span>Height</span>
            </div>
          </section>
        </section>
        <section className="card__description">
          <p>{pokemon.description}</p>
        </section>
      </section>
    </main>
  );
};
