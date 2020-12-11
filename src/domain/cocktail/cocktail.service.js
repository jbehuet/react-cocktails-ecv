
export function getCocktail(favorites) {
    return fetch('/api/cocktail')
        .then(async res => {
            if (res.status !== 200 && res.status !== 201) {
                const { message } = await res.json()
                throw new Error(message)
            }
            return res
        })
        .then(res => res.json())
        .then(cocktail => {
            if (favorites.find(f => f.id === cocktail.idDrink)) {
                console.log("retry");
                return getCocktail(favorites)
            } else {
                return cocktail
            }
        })
}

export function getCocktailById(cocktailID) {
    return fetch(`/api/cocktail/${cocktailID}`)
        .then(async res => {
            if (res.status !== 200 && res.status !== 201) {
                const { message } = await res.json()
                throw new Error(message)
            }
            return res
        })
        .then(res => res.json());
}