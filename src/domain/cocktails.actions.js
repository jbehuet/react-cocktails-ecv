export const types = {
    FETCH_COCKTAIL_PENDING: 'FETCH_COCKTAIL_PENDING',
    FETCH_COCKTAIL_SUCCESS: 'FETCH_COCKTAIL_SUCCESS',
    FETCH_COCKTAIL_ERROR: 'FETCH_COCKTAIL_ERROR',
}

export function fetchCocktailPending() {
    return {
        type: types.FETCH_COCKTAIL
    }
}

export function fetchCocktailSuccess(cocktail) {
    return {
        type: types.FETCH_COCKTAIL_SUCCESS,
        payload: cocktail
    }
}

export function fetchCocktailError(error) {
    return {
        type: types.FETCH_COCKTAIL_ERROR,
        error
    }
}