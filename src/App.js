import { useCallback, useEffect, useState } from 'react';
import { Card } from './components/card/Card';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [cocktail, setCocktail] = useState();
  const [cocktails, setCocktails] = useLocalStorage('cocktails', [])
  const [isLoading, setIsLoading] = useState(true);

  const likeCocktail = (likedCocktail) => {
    setCocktails([...cocktails, likedCocktail]);
  }

  const retry = () => {
    fetchCocktail();
  }

  const fetchCocktail = useCallback(() => {
    setIsLoading(true);
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(res => res.drinks && res.drinks[0])
      .then(cocktail => {
        if (cocktails.find(c => c.idDrink === cocktail.idDrink)) {
          console.log("retry");
          fetchCocktail();
        } else {
          setIsLoading(false);
          setCocktail(cocktail);
        }
      })
      .catch(e => console.error(e))
  }
    , [cocktails])

  useEffect(() => {
    fetchCocktail();
  }, [fetchCocktail])

  return (
    <div className="App">
      {<Card
        isLoading={(isLoading || !cocktail)}
        cocktail={cocktail}
        onLike={likeCocktail}
        onRetry={retry} />}
    </div>
  );
}

export default App;
