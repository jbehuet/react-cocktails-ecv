import { getFavorites, postFavorite, deleteFavorite } from './favorites.service';

export const types = {
    FAVORITES_DONE: 'FAVORITES_DONE',
    FAVORITES_FAILED: 'FAVORITES_FAILED'
}


export function fetchFavorites(dispatch) {
    getFavorites()
        .then(favorites => dispatch(_onSuccess(favorites)))
        .catch(error => dispatch(_onError(error)))
}

export function addToFavorites(dispatch, cocktail) {
    postFavorite(cocktail)
        .then(favorites => dispatch(_onSuccess(favorites)))
        .catch(error => dispatch(_onError(error)))
}

export function removeFromFavorites(dispatch, cocktailID) {
    deleteFavorite(cocktailID)
        .then(favorites => dispatch(_onSuccess(favorites)))
        .catch(error => dispatch(_onError(error)))
}

function _onSuccess(favorites) {
    return {
        type: types.FAVORITES_DONE,
        payload: favorites
    }
}

function _onError(error) {
    return {
        type: types.FAVORITES_FAILED,
        payload: error
    }
}