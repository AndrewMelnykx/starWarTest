import React from "react";

import { useSelector } from "react-redux";
import { cardsDataSelector } from "@store/cast-list/selectors";

import CardTemplate from "./template";

import "./index.scss";
import { useMemo } from "react";

const CardsCast = () => {
  const peopleList = useSelector(cardsDataSelector);

  const memoizedPeopleList = useMemo(() => {
    return peopleList;
  }, [peopleList]);

  return (
    <div
      className="card-element-wrapper"
      style={{ "--n": peopleList.length } as React.CSSProperties}
    >
      {memoizedPeopleList.map((character, index) => (
        <CardTemplate key={character.id} character={character} index={index} />
      ))}
    </div>
  );
};

export default CardsCast;
