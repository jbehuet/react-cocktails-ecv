import React from "react";
import { create } from "react-test-renderer";

import { Card } from "./Card";

const fakeCocktail = {
    "idDrink": "13190",
    "strDrink": "Kool-Aid Shot",
    "strCategory": "Shot",
    "strAlcoholic": "Alcoholic",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/fegm621503564966.jpg",
    "strIngredient1": "Vodka",
    "strMeasure1": "1 shot ",
}

describe("Card component", () => {

    it("renders correctly when is Loading", () => {
        const component = create(<Card isLoading={true} onLike={() => { }} onRetry={() => { }} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it("renders correctly with like button and retry", () => {
        const component = create(<Card cocktail={fakeCocktail} onLike={() => { }} onRetry={() => { }} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it("renders correctly with remove button", () => {
        const component = create(<Card cocktail={fakeCocktail} onRemove={() => { }}/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
