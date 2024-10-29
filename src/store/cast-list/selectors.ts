import { RootState } from "@store/index";

const cardsDataSelector = (state: RootState) => state.cardsData.peopleList;
const currentPageSelector = (state: RootState) => state.cardsData.currentPage;
const moviesDataSelector = (state: RootState) => state.cardsData.filmList;
const starshipsDataSelector = (state: RootState) =>
  state.cardsData.starshipList;

export {
  cardsDataSelector,
  currentPageSelector,
  moviesDataSelector,
  starshipsDataSelector,
};
