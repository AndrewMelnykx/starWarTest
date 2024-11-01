import React from "react";
import Header from "@components/Header";

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header", () => {
  it("should render header with proper content ", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(
      screen.getByText(
        (content) => content.startsWith("STAR") && content.endsWith("WARS")
      )
    ).toBeInTheDocument();
  });
});
