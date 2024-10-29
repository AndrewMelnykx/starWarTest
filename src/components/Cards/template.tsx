import React from "react";
import { Link } from "react-router-dom";
import { Person } from "@store/types";

import "./index.scss";

interface CardProps {
  character: Person;
  index: number;
}
const CardTemplate = ({ character, index }: CardProps) => (
  <article
    key={index}
    style={
      {
        "--i": index,
        "--cost": character.name,
        backgroundSize: "cover",
        backgroundPosition: "top left",
      } as React.CSSProperties
    }
  >
    <div className="avatar">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
        alt={`Character image of ${character.name}`}
        className="avatar-image"
      />
    </div>
    <header>
      <h3 className="character-name-header">{character.name}</h3>
    </header>
    <section className="button-link-section">
      <Link
        className="card-link"
        to={`/character/${character.name}`}
        key={character.id}
      >
        <button className="link-button">EXPLORE</button>
      </Link>
    </section>
  </article>
);

export default CardTemplate;
