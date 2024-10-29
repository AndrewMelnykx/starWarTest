import { Link } from "react-router-dom";
import React from "react";
import "./index.scss";

import { paginationData } from "@helpers/constants";
import { useSelector } from "react-redux";
import { currentPageSelector } from "@store/cast-list/selectors";
import { handleDecrement, handleIncrement } from "@helpers/helper-functions";
import { UseStoreDispatcher } from "@store/index";
import { handleCurrentPage } from "@store/cast-list/slice";

const Pagination = () => {
  const currentPage = useSelector(currentPageSelector);
  const dispatch = UseStoreDispatcher();

  const handleDecrementButton = () => {
    dispatch(handleCurrentPage(handleDecrement(currentPage)));
  };
  const handleIncrementButton = () => {
    dispatch(handleCurrentPage(handleIncrement(currentPage)));
  };
  const handlePaginationClick = (page: number) => {
    dispatch(handleCurrentPage(page));
  };
  return (
    <div className="pagination-wrapper">
      {currentPage > 0 && (
        <button
          className="back-arrow-button"
          onClick={() => handleDecrementButton()}
        >
          {"<"}
        </button>
      )}
      {paginationData.map((page) => (
        <div className="link-wrapper" key={page.id}>
          <Link
            to={"/"}
            className={`link ${currentPage === page.page ? "active-link" : ""}`}
            onClick={() => handlePaginationClick(page.page)}
          >
            {page.page}
          </Link>
        </div>
      ))}
      {currentPage <= paginationData.length && (
        <button
          className="forward-arrow-button"
          onClick={() => handleIncrementButton()}
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default Pagination;
