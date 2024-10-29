import React from "react";

import { getStarshipIdFromUrl } from "@helpers/helper-functions";
import { Film, Person, Starship } from "@store/types";
import defaultStarship from "@assets/default-starship-image.webp";

import "./index.scss";
import { Link } from "react-router-dom";

const MovieDetailsTemplate = ({
  person,
  movies,
  starships,
}: {
  person: Person;
  movies: Film[];
  starships: Starship[];
}) => {
  return (
    <div className="movie-details-template-wrapper">
      <button className="return-button">
        <Link to={"/"} className="return-button-link">
          {"➤"}
        </Link>
      </button>

      <div className="image-wrapper">
        <h1 className="character-name">{person.name}</h1>

        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
          alt={`Character image of ${person.name}`}
          className="details-image-person"
        />
      </div>
      <div className="related-info-wrapper">
        <div className="characters-info-movies">
          <h2>Related movies</h2>
          <ul className="movie-list">
            {movies.map((movie) => (
              <li className="movie" key={movie.id}>
                <h3 className="movie-title"> {movie.title}</h3>

                <img
                  src={`https://starwars-visualguide.com/assets/img/films/${movie.id}.jpg`}
                  alt={`Character image of ${movie.title}`}
                  className="details-image-movies"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="characters-info-starships">
          <h2>Related starships</h2>
          <ul className="starships-list">
            {starships.map((starship) => (
              <li className="starship" key={starship.url}>
                <h3 className="starship-title"> {starship.name}</h3>

                <img
                  src={`https://starwars-visualguide.com/assets/img/starships/${getStarshipIdFromUrl(
                    starship.url
                  )}.jpg`}
                  alt={`Character image of ${starship.name}`}
                  className="details-image-starships"
                  onError={(e) => {
                    e.currentTarget.src = `${defaultStarship}`;
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsTemplate;
