import { useEffect, useContext } from 'react';

import { Card } from '../components/card/Card';

import { fetchCocktail } from '../domain/cocktails.service';
import { CocktailsContext } from '../domain/cocktails.store';

export default function Home() {
    const {state, dispatch, likeCocktail} = useContext(CocktailsContext);

    const onLike = (cocktail) => {
        likeCocktail(cocktail);
    }

    const retry = () => {
        fetchCocktail(dispatch, state.cocktails);
    }

    useEffect(() => {
        fetchCocktail(dispatch, state.cocktails);
    }, [dispatch, state.cocktails])

    return (
        <Card
            isLoading={(state.pending || !state.cocktail)}
            cocktail={state.cocktail}
            onLike={onLike}
            onRetry={retry} />
    )

}