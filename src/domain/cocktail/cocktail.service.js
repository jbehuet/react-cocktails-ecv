
export function getCocktail(favorites) {
    return fetch('/api/cocktail')
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
    return fetch(`/api/cocktail/${cocktailID}`).then(res => res.json());
}