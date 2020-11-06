import { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Card } from '../components/card/Card';

import { fetchCocktail, fetchCocktailById } from '../domain/cocktails.service';
import { CocktailsContext } from '../domain/cocktails.store';

export default function Home() {
    const { state, dispatch, likeCocktail, removeCocktail } = useContext(CocktailsContext);
    const { id } = useParams();
    const history = useHistory();
    
    const onLike = (cocktail) => {
        likeCocktail(cocktail);
    }

    const retry = () => {
        fetchCocktail(dispatch, state.cocktails);
    }

    const remove = (cocktail) => {
        removeCocktail(cocktail);
        history.push('/')
    }

    useEffect(() => {
        if (id) fetchCocktailById(dispatch, id)
        else fetchCocktail(dispatch, state.cocktails);
    }, [dispatch, state.cocktails, id])

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