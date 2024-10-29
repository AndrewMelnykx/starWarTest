import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRelatedMovies,
  fetchPeopleList,
  fetchRelatedStarships,
} from "./actions";
import { CardsDataHandlingTypes } from "@store/types";

const initialCardsData: CardsDataHandlingTypes = {
  peopleList: [],
  currentPage: 1,
  filmList: [],
  starshipList: [],
};

const CardsDataSlice = createSlice({
  name: "cards-data",
  initialState: initialCardsData,
  reducers: {
    handleCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    addMovieToFilmList: (state, action) => {
      state.filmList.push(action.payload);
    },
    addStarshipToStarshipList: (state, action) => {
      state.starshipList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeopleList.fulfilled, (state, action) => {
        state.peopleList = action.payload;
      })

      .addCase(fetchRelatedMovies.fulfilled, (state, action) => {
        state.filmList = action.payload;
      })
      .addCase(fetchRelatedStarships.fulfilled, (state, action) => {
        state.starshipList = action.payload;
      });
  },
});

export const {
  handleCurrentPage,
  addMovieToFilmList,
  addStarshipToStarshipList,
} = CardsDataSlice.actions;

export default CardsDataSlice.reducer;
