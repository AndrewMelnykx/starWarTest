import { routerType } from "./router.types";
import Home from "./Home";
import CharacterDetail from "@components/MoviesDetails";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "character/:characterName",
    element: <CharacterDetail />,
    title: "info-movies",
  },
];

export default pagesData;
