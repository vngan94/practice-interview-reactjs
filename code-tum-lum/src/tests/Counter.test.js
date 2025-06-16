import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider, useDispatch } from "react-redux";
import Counter from "../Counter";
import counterStore from "../counterStore";
import { incrementCounter } from "../counterAction";
//  Mock only useDispatch and useSelector, not the entire module
jest.mock("react-redux", () => {
  const actualRedux = jest.requireActual("react-redux");
  return {
    ...actualRedux,
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

describe("<Counter/>", () => {
  it("should fire event when click Increase button", async () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    render(
      <Provider store={counterStore}>
        <Counter />
      </Provider>
    );
    const buttonIncease = screen.getByRole("button", { name: "Increase" });
    await userEvent.click(buttonIncease);
    expect(dispatch).toHaveBeenCalledWith(incrementCounter());
  });
});
