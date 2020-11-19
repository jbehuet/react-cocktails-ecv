import React from "react";
import { create } from "react-test-renderer";

import { Like } from "./Like";

describe("Like button component", () => {
  it("renders correctly", () => {
    const component = create(<Like onClick={() => { }} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
