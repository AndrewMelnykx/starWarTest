import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { CardsDataHandlingTypes } from "./types";
import CardsDataSlice from "./cast-list/slice";
import { useSelector } from "react-redux";

export interface RootState {
  cardsData: CardsDataHandlingTypes;
}

const RootReducer = combineReducers({
  cardsData: CardsDataSlice,
});

const store = configureStore({ reducer: RootReducer });
const UseStoreDispatcher = (): StoreDispatcherTypes => store.dispatch;

export type StoreDispatcherTypes = typeof store.dispatch;
export { UseStoreDispatcher, RootReducer };
export const UseAppSelector = useSelector;
export default store;
