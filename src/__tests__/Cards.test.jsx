import React from "react";
import { render as RtlRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import CardsCast from "@components/Cards/index";
import { initialMockStateCards } from "./initials-states";

const mockStore = configureMockStore();
const store = mockStore(initialMockStateCards);

const render = (component) =>
  RtlRender(
    <Provider store={store}>
      <Router>{component} </Router>
    </Provider>
  );

describe("CardsCast", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render a list of character cards", () => {
    render(<CardsCast />);

    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/Darth Vader/i)).toBeInTheDocument();

    const cards = screen.getAllByRole("article");
    expect(cards.length).toBe(2);
  });
});
