import { useContext } from "react";
import { FavoritesList } from "../components/favoritesList/FavoritesList";
import { CocktailsContext } from "../domain/cocktails.store";

export default function Favorites() {
    const { state, removeCocktail } = useContext(CocktailsContext);

    return (
        <>
            <h1 className="title">Favorites</h1>
            <FavoritesList cocktails={state.cocktails} onRemove={removeCocktail} />
        </>
    )
}