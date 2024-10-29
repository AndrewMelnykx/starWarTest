import React from "react";
import { render as RtlRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import CharacterDetail from "@components/MoviesDetails/index";
import * as ReactRouter from "react-router";
import { initialMockStateMovieDetails } from "./initials-states";

const mockStore = configureMockStore();
const store = mockStore(initialMockStateMovieDetails);

jest
  .spyOn(ReactRouter, "useParams")
  .mockReturnValue({ characterName: "Luke Skywalker" });

const render = (component) =>
  RtlRender(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

describe("CharacterDetail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render character details for Luke Skywalker", () => {
    render(<CharacterDetail />);

    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/A New Hope/i)).toBeInTheDocument();
    expect(screen.getByText(/The Empire Strikes Back/i)).toBeInTheDocument();
    expect(screen.getByText(/Return of the Jedi/i)).toBeInTheDocument();
  });

  it("should render an error page if character not found", () => {
    jest;
    jest
      .spyOn(ReactRouter, "useParams")
      .mockReturnValue({ characterName: "Unknown Character" });
    render(<CharacterDetail />);

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
