import { useEffect, useContext } from "react";

import { FavoritesList } from "../components/favoritesList/FavoritesList";

import { ApplicationContext } from '../domain/application.store';
import { fetchFavorites } from "../domain/favorites/favorites.actions";


export default function Favorites() {
    const { state, dispatch } = useContext(ApplicationContext);

    useEffect(() => {
        fetchFavorites(dispatch);
    }, [dispatch])


    return (
        <>
            <h1 className="title">Favorites</h1>
            <FavoritesList favorites={state.favorites} onRemove={() => { }} />
        </>
    )
}