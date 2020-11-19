import React from "react";
import { create } from "react-test-renderer";

import { Refresh } from "./Refresh";

describe("Refresh button component", () => {
  it("renders correctly", () => {
    const component = create(<Refresh onClick={() => { }} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
