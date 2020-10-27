import { useEffect, useReducer } from 'react';

import { useCocktailsStorage } from '../hooks/useCocktailsStorage';

import { Card } from '../components/card/Card';

import { fetchCocktail } from '../domain/cocktails.service';
import { default as CocktailReducer, initialState } from '../domain/cocktails.reducer';

export default function Home() {
    const [state, dispatch] = useReducer(CocktailReducer, initialState);
    const [cocktails, likeCocktail] = useCocktailsStorage([])

    const onLike = (cocktail) => {
        likeCocktail(cocktail);
    }

    const retry = () => {
        fetchCocktail(dispatch, cocktails);
    }

    useEffect(() => {
        fetchCocktail(dispatch, cocktails);
    }, [cocktails])

    return (
        <Card
            isLoading={(state.pending || !state.cocktail)}
            cocktail={state.cocktail}
            onLike={onLike}
            onRetry={retry} />
    )

}