import { useContext } from "react";
import { CocktailsContext } from "../domain/cocktails.store";

export default function Favorites() {
    const { state, dispatch } = useContext(CocktailsContext);

    return (
        <div>
            {JSON.stringify(state.cocktails)}
        </div>
    )
}