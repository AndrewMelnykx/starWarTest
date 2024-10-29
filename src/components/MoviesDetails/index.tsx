import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  cardsDataSelector,
  currentPageSelector,
  moviesDataSelector,
  starshipsDataSelector,
} from "@store/cast-list/selectors";
import MovieDetailsTemplate from "./template";
import ErrorPage from "@pages/Error";
import "./index.scss";
import { UseStoreDispatcher } from "@store/index";
import {
  fetchPeopleList,
  fetchRelatedMovies,
  fetchRelatedStarships,
} from "@store/cast-list/actions";

const CharacterDetail = () => {
  const { characterName } = useParams<{ characterName: string }>();

  const peopleList = useSelector(cardsDataSelector);
  const movies = useSelector(moviesDataSelector);
  const starships = useSelector(starshipsDataSelector);
  const page = useSelector(currentPageSelector);

  const dispatch = UseStoreDispatcher();

  useEffect(() => {
    if (!peopleList.length) {
      dispatch(fetchPeopleList(page));
    }
  }, [dispatch, peopleList.length, page]);

  const character = useMemo(() => {
    return peopleList.find((person) => person.name === characterName);
  }, [peopleList, characterName]);

  useEffect(() => {
    if (character) {
      dispatch(fetchRelatedMovies(character.films));
      dispatch(fetchRelatedStarships(character.starships));
    }
  }, [dispatch, character]);

  if (!character) {
    return <ErrorPage />;
  }

  return (
    <div className="character-detail-wrapper">
      <MovieDetailsTemplate
        person={character}
        movies={movies}
        starships={starships}
      />
    </div>
  );
};

export default CharacterDetail;
