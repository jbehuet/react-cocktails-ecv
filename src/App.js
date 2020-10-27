import { useEffect, useReducer } from 'react';
import { Card } from './components/card/Card';
import { Menu } from './components/menu/Menu';

import { useCocktailsStorage } from './hooks/useCocktailsStorage';

import { fetchCocktail } from './domain/cocktails.service';
import { default as CocktailReducer, initialState } from './domain/cocktails.reducer';


function App() {
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
    <div className="App">
      {<Card
        isLoading={(state.pending || !state.cocktail)}
        cocktail={state.cocktail}
        onLike={onLike}
        onRetry={retry} />}
      <Menu />
    </div>
  );
}

export default App;
