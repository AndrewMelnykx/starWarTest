import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "@components/Header";
import Pagination from "@components/Pagination";
import CardsCast from "@components/Cards";

import { UseStoreDispatcher } from "@store/index";
import { currentPageSelector } from "@store/cast-list/selectors";
import { fetchPeopleList } from "@store/cast-list/actions";

import "./index.scss";

const Home = () => {
  const dispatch = UseStoreDispatcher();
  const page = useSelector(currentPageSelector);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchPeopleList(page));
      } catch (error) {
        console.error("Error in useEffect fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div className="main-home-wrapper">
      <Header />
      <Pagination />
      <h2 className="cards-title">{"Cast "}</h2>
      <CardsCast />
    </div>
  );
};

export default Home;
