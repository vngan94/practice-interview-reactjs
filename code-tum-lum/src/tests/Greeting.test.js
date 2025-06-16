import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Greeting from "../Greeting";

describe("<Greeting/>", () => {
  it("should display name", () => {
    render(<Greeting user="Ngan" />);
    expect(screen.getByText("Hello Ngan")).toBeInTheDocument();
  });
});
