import { addFavoriteSuccess, removeFavoriteSuccess, favoriteError, fetchFavoriteSuccess } from './favorites.actions';

export function getFavorites() {
    return fetch('/api/favorites').then(res => res.json());
}

export function postFavorite(cocktail) {
    return fetch('/api/favorites',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: cocktail.idDrink, name: cocktail.strDrink })
        })
        .then(res => res.json());
}

export function deleteFavorite(cocktailID) {
    return fetch(`/api/favorites/${cocktailID}`,
        {
            method: 'DELETE'
        })
        .then(res => res.json())
}