import React from "react";
import { render as RtlRender, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import Pagination from "@components/Pagination";
import { initialMockStatePagination } from "./initials-states";
import { UseStoreDispatcher } from "@store/index";

jest.mock("@store/index", () => ({
  ...jest.requireActual("@store/index"),
  UseStoreDispatcher: jest.fn(),
}));

const mockStore = configureMockStore();
const store = mockStore(initialMockStatePagination);

const render = (component) =>
  RtlRender(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

describe("Pagination", () => {
  let mockDispatch;

  beforeEach(() => {
    jest.clearAllMocks();
    mockDispatch = jest.fn();
    UseStoreDispatcher.mockReturnValue(mockDispatch);
  });

  it("should render pagination buttons", () => {
    render(<Pagination />);

    // Check for back arrow button (should exist if `currentPage > 0`)
    const backArrow = screen.getByRole("button", { name: "<" });
    expect(backArrow).toBeInTheDocument();

    // Check for forward arrow button
    const forwardArrow = screen.getByRole("button", { name: ">" });
    expect(forwardArrow).toBeInTheDocument();

    // Check for pagination links
    const paginationLinks = screen.getAllByRole("link");
    expect(paginationLinks.length).toBeGreaterThan(0);
  });

  it("should call handleDecrementButton when back arrow is clicked", () => {
    render(<Pagination />);

    const backArrow = screen.getByRole("button", { name: "<" });
    fireEvent.click(backArrow);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should call handleIncrementButton when forward arrow is clicked", () => {
    render(<Pagination />);

    const forwardArrow = screen.getByRole("button", { name: ">" });
    fireEvent.click(forwardArrow);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should call handlePaginationClick when a pagination link is clicked", () => {
    render(<Pagination />);

    const paginationLinks = screen.getAllByRole("link");
    fireEvent.click(paginationLinks[0]);

    expect(mockDispatch).toHaveBeenCalledWith(expect.anything()); // Check that it was called with a valid action
  });
});
