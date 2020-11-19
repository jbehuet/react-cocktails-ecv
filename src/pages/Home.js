import { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Card } from '../components/card/Card';

import { ApplicationContext } from '../domain/application.store';
import { fetchCocktail, fetchCocktailById } from '../domain/cocktail/cocktail.actions';
import { addToFavorites, removeFromFavorites } from '../domain/favorites/favorites.actions';

export default function Home() {
    const { state, dispatch } = useContext(ApplicationContext);
    const { id } = useParams();
    const history = useHistory();

    const onLike = (cocktail) => {
        addToFavorites(dispatch, cocktail);
    }

    const retry = () => {
        fetchCocktail(dispatch, state.favorites);
    }

    const remove = (cocktail) => {
        removeFromFavorites(dispatch, cocktail.idDrink);
        history.push('/')
    }

    useEffect(() => {
        if (id) fetchCocktailById(dispatch, id)
        else fetchCocktail(dispatch, state.favorites);
    }, [dispatch, state.favorites, id])

    return (
        <Card
            isLoading={(state.pending || !state.cocktail)}
            cocktail={state.cocktail}
            onLike={!id && onLike}
            onRetry={!id && retry}
            onRemove={id && remove}
        />
    )

}