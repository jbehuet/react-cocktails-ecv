import { getToken } from "../authentication/authentication.service";

export function getFavorites() {
    return fetch('/api/favorites',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken()
            }
        })
        .then(async res => {
            if (res.status !== 200 && res.status !== 201) {
                const { message } = await res.json()
                throw new Error(message)
            }
            return res
        })
        .then(res => res.json());
}

export function postFavorite(cocktail) {
    return fetch('/api/favorites',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken()
            },
            body: JSON.stringify({ id: cocktail.idDrink, name: cocktail.strDrink })
        })
        .then(async res => {
            if (res.status !== 200 && res.status !== 201) {
                const { message } = await res.json()
                throw new Error(message)
            }
            return res
        })
        .then(res => res.json());
}

export function deleteFavorite(cocktailID) {
    return fetch(`/api/favorites/${cocktailID}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken()
            }
        })
        .then(async res => {
            if (res.status !== 200 && res.status !== 201) {
                const { message } = await res.json()
                throw new Error(message)
            }
            return res
        })
        .then(res => res.json())
}