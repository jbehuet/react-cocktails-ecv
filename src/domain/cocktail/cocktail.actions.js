import { getCocktail, getCocktailById } from './cocktail.service';

export const types = {
    COCKTAIL_STARTED: 'COCKTAIL_STARTED',
    COCKTAIL_DONE: 'COCKTAIL_DONE',
    COCKTAIL_FAILED: 'COCKTAIL_FAILED'
}

export function fetchCocktail(dispatch, favorites) {
    dispatch(_started());
    getCocktail(favorites)
        .then(cocktail => dispatch(_onSuccess(cocktail)))
        .catch(error => dispatch(_onError(error)));
}

export function fetchCocktailById(dispatch, cocktailId) {
    dispatch(_started());
    getCocktailById(cocktailId)
        .then(cocktail => dispatch(_onSuccess(cocktail)))
        .catch(error => dispatch(_onError(error)));
}

function _started() {
    return {
        type: types.COCKTAIL_STARTED
    }
}

function _onSuccess(cocktail) {
    return {
        type: types.COCKTAIL_DONE,
        payload: cocktail
    }
}

function _onError(error) {
    return {
        type: types.COCKTAIL_FAILED,
        payload: error
    }
}