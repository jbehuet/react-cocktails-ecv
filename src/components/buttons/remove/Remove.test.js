import React from "react";
import { create } from "react-test-renderer";

import { Remove } from "./Remove";

describe("Remove button component", () => {
  it("renders correctly", () => {
    const component = create(<Remove onClick={() => { }} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
