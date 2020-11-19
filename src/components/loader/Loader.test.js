import React from "react";
import { create } from "react-test-renderer";

import { Loader } from "./Loader";

describe("Loader component", () => {
  it("renders correctly", () => {
    const component = create(<Loader />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
