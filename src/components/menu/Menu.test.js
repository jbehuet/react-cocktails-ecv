import React from "react";
import { create } from "react-test-renderer";

import { Menu } from "./Menu";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/"
  })
}));

describe("Menu component", () => {
  it("renders correctly", () => {
    const component = create(<Menu />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
