import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter } from 'react-router'

import { FavoritesList } from "./FavoritesList";

const fakeFavorites = [{
  "id": "13190",
  "name": "Kool-Aid Shot"
}];

describe("Favorites List component", () => {
  it("renders correctly without favorites", () => {
    const component = create(
      <MemoryRouter>
        <FavoritesList favorites={[]} onRemove={() => { }} />
      </MemoryRouter>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("renders correctly with favorites", () => {
    const component = create(
      <MemoryRouter>
        <FavoritesList favorites={fakeFavorites} onRemove={() => { }} />
      </MemoryRouter>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
