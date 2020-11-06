import { fetchCocktailPending, fetchCocktailSuccess, fetchCocktailError } from './cocktails.actions';

export function fetchCocktail(dispatch, cocktails) {
    dispatch(fetchCocktailPending());
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            return res;
        })
        .then(res => res.drinks && res.drinks[0])
        .then(cocktail => {
            if (cocktails.find(c => c.idDrink === cocktail.idDrink)) {
                console.log("retry");
                fetchCocktail(dispatch, cocktails)
            } else {
                dispatch(fetchCocktailSuccess(cocktail));
            }
        })
        .catch(error => dispatch(fetchCocktailError(error)))
}

export function fetchCocktailById(dispatch, cocktailID) {
    dispatch(fetchCocktailPending());
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            return res;
        })
        .then(res => res.drinks && res.drinks[0])
        .then(cocktail => {
            dispatch(fetchCocktailSuccess(cocktail));
        })
        .catch(error => dispatch(fetchCocktailError(error)))
}