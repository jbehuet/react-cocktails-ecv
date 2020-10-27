export const types = {
    FETCH_COCKTAIL_PENDING: 'FETCH_COCKTAIL_PENDING',
    FETCH_COCKTAIL_SUCCESS: 'FETCH_COCKTAIL_SUCCESS',
    FETCH_COCKTAIL_ERROR: 'FETCH_COCKTAIL_ERROR',
    LIKE_COCKTAIL: 'LIKE_COCKTAIL'
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

export function likeCocktail(cocktail) {
    return {
        type: types.LIKE_COCKTAIL,
        payload: cocktail
    }
}