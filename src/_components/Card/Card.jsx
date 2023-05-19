import "./Card.css";

export const Card = ({ pokemon }) => {
  const mainType = pokemon.types[0];

  return (
    <div className={`card__container card__container--${mainType}`}>
      <section className="card__header">
        <h1>{pokemon.name}</h1>
        <span>{pokemon.id}</span>
      </section>
      <section className="card__pokemon-img">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          alt="charmander"
        />
      </section>

      <section className="card__info">
        <section className="card__type">
          {pokemon.types.map((type) => (
            <h2 className={`card__type__pill card__type__pill--${type}`}>
              {type}
            </h2>
          ))}
        </section>

        <section className="card__about">
          <h2 className={`card__about card__about--${mainType}`}>About</h2>
        </section>

        <section className="card__size-pokemon">
          <section className="card__measure">
            <div className="card__measure-values">
              <img src="/icons/weight-icon.svg" alt="weight-icon" />
              <span>{pokemon.weight}</span>
            </div>
            <div className="card__measure-span">
              <span>Weight</span>
            </div>
          </section>

          <span className="vertical-line"></span>

          <section className="card__measure">
            <div className="card__measure-values">
              <img src="/icons/height-icon.svg" alt="height-icon" />
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
    </div>
  );
};
