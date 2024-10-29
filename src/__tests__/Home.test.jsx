import React from "react";
import { render as RtlRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import Home from "@pages/Home";
import { initialMockStateHome } from "./initials-states";

const mockStore = configureMockStore();
const store = mockStore(initialMockStateHome);

const render = (component) =>
  RtlRender(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

describe("Home", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render header, pagination buttons, and cast title", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /cast/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /star wars/i })
    ).toBeInTheDocument();

    const paginationButtons = screen.getAllByRole("link");
    expect(paginationButtons.length).toBeGreaterThan(0);
  });

  it("should dispatch fetchPeopleList on mount", async () => {
    render(<Home />);
  });
});
